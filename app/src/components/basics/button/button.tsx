import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import React from "react"

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white"
  }
})

const StyledButton = (props: any) => {
  const styles = useStyles()
  return (
    <Button className={styles.button} {...props}>
      {props.children}
    </Button>
  )
}

export default StyledButton
