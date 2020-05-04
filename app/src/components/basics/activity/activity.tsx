import React from "react"
import { Activity } from "../../../shared-interfaces"
import { Button } from "@material-ui/core"

interface ActivityProps {
  activity: Activity
  open: boolean
  index: number
  onContainerClicked: (event: React.MouseEvent<HTMLDivElement>) => void
  onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MyActivity = (props: ActivityProps) => {
  const { activity, onDelete, onContainerClicked, open } = props
  console.log("My activity onDelete: ", onDelete)
  const openContainer = (
    <div onClick={onContainerClicked}>
      <div>
        <p>{activity.name}</p>
        <p>Length: {activity.length !== undefined ? activity.length : 0}</p>
        <p>
          Duration: {activity.duration !== undefined ? activity.duration : 0}
        </p>
        <p>Steps: {activity.steps !== undefined ? activity.steps : 0}</p>
        <p>
          Calories: {activity.calories !== undefined ? activity.calories : 0}
        </p>
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
    <div onClick={onContainerClicked}>
      <p>{activity.name}</p>
    </div>
  )
  return open ? openContainer : closedContainer
}

export default MyActivity
