import {
  Circle,
  GoogleMap,
  LoadScript,
  OverlayView,
  Polyline
} from "@react-google-maps/api"
import React, { useEffect, useState } from "react"

import PlayButton from "./play-button"
import StopButton from "./stop-button"
import { number } from "yup"

interface TimeTracker {
  startTime?: number | null
  endTime?: number | null
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
  zIndex: 1
}

const circleOptions = {
  strokeColor: "#FE6B8B",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF8E53",
  fillOpacity: 0.8
}

const GoogleMaps = () => {
  const [playerPosition, setPlayerPosition] = useState(() => {
    const defaultState: Position = {
      lat: 55.672,
      lng: 12.562
    }
    return defaultState
  })

  const [runActive, setRunActive] = useState(false)
  const [runCoordinates, setRunCoordinates] = useState<Position[]>([])
  const [timeTracker, setTimeTracker] = useState<TimeTracker>(() => {
    const defaultState: TimeTracker = {
      startTime: null,
      endTime: null
    }
    return defaultState
  })

  useEffect(() => {
    initiateMap()

    return () => {
      let id = navigator.geolocation.watchPosition(success, errorCallback)
      navigator.geolocation.clearWatch(id)
    }
  })

  function initiateMap() {
    currentPosition()
    navigator.geolocation.watchPosition(trackPath, errorCallback)
  }

  const currentPosition = () => {
    if (!navigator.geolocation) {
      alert("geolocation is not supported in this browser")
    } else {
      navigator.geolocation.getCurrentPosition(success, errorCallback)
    }
  }

  function trackPath(position: any) {
    console.log("track path")
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude

    const myPosition = {
      lat: latitude,
      lng: longitude
    }

    if (runActive) {
      console.log("Adding position: ", myPosition)
      var coords = runCoordinates
      coords.push(myPosition)
      setRunCoordinates(coords)
      console.log("Coordinates", coords)
    }

    setPlayerPosition(myPosition)
  }

  function success(position: any) {
    console.log("Success")
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude

    const myPosition = {
      lat: latitude,
      lng: longitude
    }

    setPlayerPosition(myPosition)
  }

  function errorCallback(error: any) {
    alert("ERROR(" + error.code + "): " + error.message)
  }

  const onPlayClicked = () => {
    console.log("Starting run")
    const today = new Date()
    const startTime = today.getHours() + today.getMinutes() + today.getSeconds()

    setTimeTracker({ startTime: startTime })
    setRunActive(true)
    setRunCoordinates([])
  }

  const onStopClicked = () => {
    if (runActive) {
      console.log("Ending run")
      const today = new Date()
      const endTime = today.getHours() + today.getMinutes() + today.getSeconds()
      const startTime = timeTracker.startTime
      console.log("Endtime and start time: ", endTime, startTime)

      const runDuration = startTime ? endTime - startTime : 0
      const runCoords = runCoordinates
      const distance = calculateDistance(runCoords)
      console.log("run coordinates: ", runCoords)
      console.log("run duration: ", runDuration)
      console.log("run distance: ", distance)
      alert("Distance: " + distance)

      setRunCoordinates([])
      setRunActive(false)
    }
  }

  const calculateDistance = (paths: Position[]) => {
    console.log("Calculating distance for: ", paths)
    var R = 6371e3 // metres
    var distance = 0
    if (paths.length > 2) {
      for (let index = 1; index < paths.length; index++) {
        const element = paths[index - 1]
        const element2 = paths[index]

        const lat1 = element.lat
        const lat2 = element2.lat
        const lon1 = element.lng
        const lon2 = element2.lng

        var φ1 = (lat1 * Math.PI) / 180
        var φ2 = (lat2 * Math.PI) / 180
        var Δφ = ((lat2 - lat1) * Math.PI) / 180
        var Δλ = ((lon2 - lon1) * Math.PI) / 180

        var a =
          Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        var d = R * c
        distance = +d
      }
    }

    console.log("Distance:")
    return distance
  }

  const activeOverlay = (
    <OverlayView
      position={playerPosition}
      getPixelPositionOffset={() => ({
        x: 0,
        y: 150
      })}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <PlayButton onClick={onPlayClicked} />
      </>
    </OverlayView>
  )

  const pausedOverlay = (
    <OverlayView
      position={playerPosition}
      getPixelPositionOffset={() => ({
        x: 0,
        y: 150
      })}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <>
        <StopButton onClick={onStopClicked} />
      </>
    </OverlayView>
  )

  return (
    <>
      {runCoordinates.map((item: Position, index: number) => {
        return <p key={index}>{item.lat}</p>
      })}
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDEKSGDimrHDb12-2kflJkrzAcRf3MECsQ"
      >
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
          zoom={18}
          center={playerPosition}
          options={{
            disableDefaultUI: true
          }}
        >
          <Polyline options={runPathOptions} path={runCoordinates} />
          {runActive ? pausedOverlay : activeOverlay}
          <Circle center={playerPosition} radius={4} options={circleOptions} />
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default GoogleMaps
