import { Button, makeStyles } from "@material-ui/core"
import StopIcon from "@material-ui/icons/Stop"
import React from "react"

interface PlayButtonProps {
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: "white",
    padding: "20px",
    borderRadius: "50%"
  }
})

const StopButton = (props: PlayButtonProps) => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick}>
      <StopIcon />
    </Button>
  )
}

export default StopButton
