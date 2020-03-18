import React from "react"
import { Card, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex"
  }
})

const StyledCard = (props: any) => {
  const styles = useStyles()
  return (
    <Card className={styles.container} elevation={props.elevation}>
      {props.children}
    </Card>
  )
}

export default StyledCard
