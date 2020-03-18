import React, { ReactElement } from "react"

interface TabPanelProps {
  children?: any
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props

  return value === index && { children }
}

export default TabPanel
