import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api"
import React from "react"
import MapStyles from "./map-styles"

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

interface MiniMapProps {
  path: Position[]
}

const MiniMap = (props: MiniMapProps) => {
  const { path } = props

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDEKSGDimrHDb12-2kflJkrzAcRf3MECsQ"
      >
        <GoogleMap
          id="mini-map"
          mapContainerStyle={{
            position: "relative",
            width: "200px",
            height: "200px",
          }}
          zoom={18}
          center={path[0]}
          options={{
            disableDefaultUI: true,
            styles: MapStyles,
          }}
        >
          <Polyline options={runPathOptions} path={path} />
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default MiniMap
