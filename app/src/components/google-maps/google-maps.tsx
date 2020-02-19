import {
  Circle,
  GoogleMap,
  LoadScript,
  OverlayView
} from "@react-google-maps/api"
import React, { useEffect, useState } from "react"

import PlayButton from "./play-button"
import StopButton from "./stop-button"

interface Position {
  lat: number
  lng: number
}

const GoogleMaps = () => {
  const [playerPosition, setPlayerPosition] = useState(() => {
    const defaultState: Position = {
      lat: 55.672,
      lng: 12.562
    }
    return defaultState
  })

  useEffect(() => {
    initiateMap()
  }, [])

  function initiateMap() {
    currentPosition()
    navigator.geolocation.watchPosition(success, errorCallback)
  }

  const currentPosition = () => {
    if (!navigator.geolocation) {
      alert("geolocation is not supported in this browser")
    } else {
      navigator.geolocation.getCurrentPosition(success, errorCallback)
    }
  }

  function success(position: any) {
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

  const onClick = () => {
    console.info("I have been clicked!")
  }

  const getPixelPositionOffset = (width: number, height: number) => ({
    x: width - 100,
    y: -(height / 4)
  })

  return (
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
        <OverlayView
          position={playerPosition}
          getPixelPositionOffset={(width: number, height: number) => ({
            x: -50,
            y: 150
          })}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <>
            <PlayButton onClick={() => alert("Clicked play")} />
            <StopButton onClick={onClick} />
          </>
        </OverlayView>
        <Circle
          center={playerPosition}
          radius={4}
          options={{
            strokeColor: "#FE6B8B",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF8E53",
            fillOpacity: 0.8
          }}
        />
      </GoogleMap>
      <button>Hej</button>
    </LoadScript>
  )
}

export default GoogleMaps
