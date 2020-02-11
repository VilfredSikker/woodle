import React, { ReactNode } from "react"

import styles from "./layout.module.scss"
import Navbar from "../navbar/navbar"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
