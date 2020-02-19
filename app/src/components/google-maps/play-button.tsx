import { Button, makeStyles } from "@material-ui/core"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import React from "react"

interface PlayButtonProps {
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
    color: "white",
    padding: "20px",
    borderRadius: "50%"
  }
})

const PlayButton = (props: PlayButtonProps) => {
  const classes = useStyles()

  return (
    <Button className={classes.root} onClick={props.onClick}>
      <PlayArrowIcon />
    </Button>
  )
}

export default PlayButton
