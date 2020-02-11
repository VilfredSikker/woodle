import React, { ReactNode } from "react"
import Button from "@material-ui/core/Button"

interface StyledButtonProps {}

const StyledButton = (props: any, children: any) => {
  return <Button {...props}>{props.children}</Button>
}

export default StyledButton
