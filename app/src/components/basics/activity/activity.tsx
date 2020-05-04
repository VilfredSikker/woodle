import React, { useState } from "react"
import { Activity } from "../../../shared-interfaces"
import { Button, Modal } from "@material-ui/core"
import MiniMap from "../../google-maps/mini-map"

interface ActivityProps {
  activity: Activity
  open: boolean
  index: number
  onContainerClicked: (event: React.MouseEvent<HTMLDivElement>) => void
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MyActivity = (props: ActivityProps) => {
  const { activity, onDelete, onContainerClicked, open } = props
  const [openModal, setOpenModal] = useState(false)
  console.log("My activity onDelete: ", onDelete)
  const openContainer = (
    <div>
      <div>
        <p onClick={onContainerClicked}>{activity.name}</p>
        <p>Length: {activity.length !== undefined ? activity.length : 0}</p>
        <p>
          Duration: {activity.duration !== undefined ? activity.duration : 0}
        </p>
        <p>Steps: {activity.steps !== undefined ? activity.steps : 0}</p>
        <p>
          Calories: {activity.calories !== undefined ? activity.calories : 0}
        </p>
        <Button color="primary" onClick={() => setOpenModal(true)}>
          Show Path
        </Button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          {activity.path ? <MiniMap path={activity.path} /> : <p>No Path</p>}
        </Modal>
      </div>

      {onDelete !== undefined ? (
        <Button onClick={onDelete} color="secondary">
          Delete Activity
        </Button>
      ) : (
        <> </>
      )}
    </div>
  )

  const closedContainer = (
    <div>
      <p onClick={onContainerClicked}>{activity.name}</p>
    </div>
  )
  return open ? openContainer : closedContainer
}

export default MyActivity
