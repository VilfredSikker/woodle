import React, { ReactNode } from "react"

import styles from "./layout.module.scss"
import Navbar from "../navbar/navbar"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}

export default Layout
