import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api"
import React, { useEffect } from "react"
import MapStyles from "./map-styles"
import styles from "./mini-map.module.scss"

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

  useEffect(() => {
    setListener()
  })

  const setListener = () => {
    window.addEventListener("click", () => {})
  }

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyDEKSGDimrHDb12-2kflJkrzAcRf3MECsQ"
    >
      <div className={styles.miniMapContainer}>
        <GoogleMap
          id="mini-map"
          mapContainerStyle={{
            position: "relative",
            width: "300px",
            height: "300px",
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
      </div>
    </LoadScript>
  )
}

export default MiniMap
