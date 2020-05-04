import React, { useState, ReactElement } from "react"
import { makeStyles, Modal, Fade, Backdrop, Paper } from "@material-ui/core"

interface ModalProps {
  open: boolean
  handleClose: () => void
  children: ReactElement
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const StyledModal = (props: ModalProps) => {
  const classes = useStyles()
  const { children, open, handleClose } = props
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>{children}</Paper>
      </Fade>
    </Modal>
  )
}

export default StyledModal
