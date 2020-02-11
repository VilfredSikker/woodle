import React, { ReactNode } from "react"

import styles from "./login-layout.module.scss"

interface LoginLayoutProps {
  children: ReactNode
}

const LoginLayout = (props: LoginLayoutProps) => {
  return <div className={styles.container}>{props.children}</div>
}

export default LoginLayout
