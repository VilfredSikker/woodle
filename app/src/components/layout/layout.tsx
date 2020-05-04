import React, { ReactNode } from "react"

import styles from "./layout.module.scss"
import Navbar from "../basics/navbar/navbar"
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{props.children}</div>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.BOTTOM_LEFT}
      />
    </div>
  )
}

export default Layout
