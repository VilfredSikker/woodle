import { Circle, GoogleMap, LoadScript, Polyline } from "@react-google-maps/api"
import { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import { ToastsStore } from "react-toasts"
import * as mutations from "../../graphql/mutations"
import { Activity } from "../../shared-interfaces"
import { AppContext } from "../context/app-context"
import scss from "./google-maps.module.scss"
import MapStyles from "./map-styles"
import PlayButton from "./play-button"
import StopButton from "./stop-button"

interface RunTracker {
  coordinates?: Position[]
  active?: boolean
  startTime?: Date
  endTime?: Date
}

interface Position {
  lat: number
  lng: number
}

const runPathOptions = {
  fillColor: "lightblue",
  fillOpacity: 1,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
}

const circleOptions = {
  strokeColor: "#FE6B8B",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF8E53",
  fillOpacity: 0.8,
}

const GoogleMaps = () => {
  const { contextState } = useContext(AppContext)
  const [playerPosition, setPlayerPosition] = useState(() => {
    const defaultState: Position = {
      lat: 55.672,
      lng: 12.562,
    }
    return defaultState
  })

  const [runTracker, setRunTracker] = useState<RunTracker>(() => {
    const defaultState: RunTracker = {
      coordinates: [],
      active: false,
    }
    return defaultState
  })

  useEffect(() => {
    let trackerId = navigator.geolocation.watchPosition(
      trackPath,
      errorCallback,
      {
        enableHighAccuracy: true,
      }
    )

    return () => {
      navigator.geolocation.clearWatch(trackerId)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runTracker.active])

  function trackPath(position: any) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude

    const myPosition = {
      lat: latitude,
      lng: longitude,
    }

    if (runTracker.active) {
      var coords = runTracker.coordinates
      coords?.push(myPosition)

      coords = reducePaths(coords)
      setRunTracker({ ...runTracker, coordinates: coords })
    }

    setPlayerPosition(myPosition)
  }

  function errorCallback(error: any) {
    alert("ERROR(" + error.code + "): " + error.message)
  }

  const onPlayClicked = () => {
    const today = new Date()

    setRunTracker({
      ...runTracker,
      coordinates: [],
      startTime: today,
      active: true,
    })
  }

  const onStopClicked = () => {
    const startTime = runTracker.startTime
    const today = new Date()
    const endTime = today

    var options = {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }

    const runDuration = startTime?.getTime()
      ? (endTime.getTime() - startTime.getTime()) / 1000
      : 0

    //const distance = calculateDistance(runCoords)
    const reducedPaths = reducePaths(runTracker.coordinates)
    const length = calculateDistance(reducedPaths)
    const calories = calculateCalories(length)
    const steps = calculateSteps(length)
    const name = today.toLocaleString("da", options)

    const input: Activity = {
      userID: contextState.user.id,
      id: name,
      name: name,
      duration: runDuration,
      length: length,
      calories: calories,
      steps: steps,
      path: reducedPaths,
    }

    if (reducePaths.length > 0 && runDuration > 10) {
      API.graphql(graphqlOperation(mutations.createActivity, { input: input }))
      ToastsStore.success("Saved Path")
    } else {
      ToastsStore.error("Run too short, minimum 10 seconds")
    }

    setRunTracker((prev) => ({ ...prev, active: false }))
  }

  const calculateDistance = (paths: Position[]): number => {
    var distance = 0
    if (paths.length > 2) {
      for (let index = 1; index < paths.length; index++) {
        const element = paths[index - 1]
        const element2 = paths[index]

        const lat1 = element.lat
        const lat2 = element2.lat
        const lon1 = element.lng
        const lon2 = element2.lng

        let meters = measureTwoCoordinates(lat1, lon1, lat2, lon2)

        distance += meters
      }
    }

    // Limit decimals to 2
    return +distance.toFixed(2)
  }

  function measureTwoCoordinates(
    latitude1: number,
    longitude1: number,
    latitude2: number,
    longitude2: number
  ) {
    const R = 6371e3 // metres
    // latitude and longitude in radians
    const lat1 = (latitude1 * Math.PI) / 180
    const lat2 = (latitude2 * Math.PI) / 180
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLng = ((longitude2 - longitude1) * Math.PI) / 180

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const d = R * c // in metres
    return d
  }

  const calculateCalories = (distance: number) => {
    // https://www.runnersworld.com/training/a20801301/calories-burned-running-calculator/
    // Took default number and multiplying. Don't want to deal with weight and other factors
    const calories = distance * 0.0625
    return parseFloat(calories.toFixed(2))
  }

  const calculateSteps = (distance: number) => {
    // steps calculations from https://www.quora.com/On-average-how-many-steps-does-it-take-to-travel-100-meters
    const steps = distance * 1.3
    return Math.ceil(steps)
  }

  const reducePaths = (paths: Position[] | undefined) => {
    var previousPath: Position = { lat: -99999999999, lng: -9999999999999 }
    var reducedPaths: Position[] = []

    paths &&
      paths.forEach((element) => {
        if (
          element.lat === previousPath.lat &&
          element.lng === previousPath.lng
        ) {
        } else {
          reducedPaths.push(element)
          previousPath = element
        }
      })

    return reducedPaths
  }

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDEKSGDimrHDb12-2kflJkrzAcRf3MECsQ"
      >
        <GoogleMap
          id="google-maps"
          mapContainerStyle={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          zoom={18}
          center={playerPosition}
          options={{
            disableDefaultUI: true,
            styles: MapStyles,
          }}
        >
          {runTracker.active && (
            <Polyline options={runPathOptions} path={runTracker.coordinates} />
          )}
          <Circle center={playerPosition} radius={4} options={circleOptions} />
        </GoogleMap>
      </LoadScript>
      <div className={scss.buttonContainer}>
        {runTracker.active ? (
          <StopButton onClick={onStopClicked} />
        ) : (
          <PlayButton onClick={onPlayClicked} />
        )}
      </div>
    </>
  )
}

export default GoogleMaps
