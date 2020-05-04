import { Backdrop, Fade, makeStyles, Modal, Paper } from "@material-ui/core"
import { API, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { getUser } from "../../../graphql/queries"
import ActivityList from "../activity/activity-list"
import { Activity } from "./../../../shared-interfaces"

interface FriendDetailsModalProps {
  id: string
  open: boolean
  handleClose: () => void
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

interface UserDetails {
  id: string
  username: string
  activities: Activity[]
}

const FriendDetailsModal = (props: FriendDetailsModalProps) => {
  const { open, handleClose, id } = props
  const [userDetails, setUserDetails] = useState(() => {
    const defaultState: UserDetails = {
      id: "",
      username: "",
      activities: [],
    }

    return defaultState
  })

  useEffect(() => {
    getDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const getDetails = async () => {
    if (id !== null && id !== "") {
      const detailsResult = await API.graphql(
        graphqlOperation(getUser, { id: id })
      )
      const result = detailsResult.data.getUser

      const userDetails: UserDetails = {
        id: result.id,
        username: result.username,
        activities: result.activities.items,
      }

      setUserDetails(userDetails)
    }
  }

  const classes = useStyles()

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
        <Paper className={classes.paper}>
          User: {userDetails.username}
          <ActivityList
            activities={userDetails.activities ? userDetails.activities : []}
          />
        </Paper>
      </Fade>
    </Modal>
  )
}

export default FriendDetailsModal
