import React from "react"
import { Card, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {}
})

const StyledPaper = (props: any) => {
  const styles = useStyles()
  return <Card className={styles.container}>{props.children}</Card>
}

export default StyledPaper
