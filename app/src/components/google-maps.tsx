import React, { useState, useEffect } from "react"
import {
  GoogleMap,
  LoadScript,
  Marker,
  DrawingManager,
  Circle
} from "@react-google-maps/api"

interface Position {
  lat: number
  lng: number
}

const GoogleMaps = () => {
  const [showMarker, setShowMarker] = useState(false)
  const [position, setPosition] = useState(() => {
    const defaultState: Position = {
      lat: 55.672,
      lng: 12.562
    }
    return defaultState
  })

  const [markerPosition, setMarkerPosition] = useState(() => {
    const defaultState: Position = {
      lat: 55.672,
      lng: 12.562
    }
    return defaultState
  })

  const options = {
    disableDefaultUI: true
  }

  useEffect(() => {
    currentPosition()
  }, [])

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
    setPosition(myPosition)
    setMarkerPosition(myPosition)
  }

  function errorCallback(error: any) {
    alert("ERROR(" + error.code + "): " + error.message)
  }

  const delayedShowMarker = () => {
    setTimeout(() => {
      setShowMarker(true)
    }, 3000)
  }

  const handleMarkerClick = () => {
    setShowMarker(!showMarker)
  }

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
        zoom={16}
        center={position}
        options={options}
      >
        <Circle center={position} radius={2} />
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps
