import React from "react"
import { TextField, makeStyles } from "@material-ui/core"
import "../../../variables.module.scss"

const useStyles = makeStyles({
  inputLabel: {
    color: "white"
  },

  inputField: {
    paddingLeft: "5px"
  }
})

const InputField = (props: any) => {
  const classes = useStyles()
  return (
    <TextField
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
