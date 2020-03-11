import React from "react"
import { TextField, makeStyles } from "@material-ui/core"
import "../../../variables.module.scss"

const useStyles = makeStyles({
  root: {
    "& .MuiInput-underline": {
      borderBottom: "1px solid white"
    }
  },
  inputLabel: {
    color: "white"
  },

  inputField: {
    paddingLeft: "5px",
    color: "white"
  }
})

const InputField = (props: any) => {
  const classes = useStyles()
  return (
    <TextField
      className={classes.root}
      {...props}
      InputLabelProps={{
        className: classes.inputLabel
      }}
      inputProps={{
        className: classes.inputField
      }}
    />
  )
}

export default InputField
