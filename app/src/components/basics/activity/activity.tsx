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

  const openContainer = (
    <div onClick={onContainerClicked}>
      <div>
        <p>{activity.name}</p>
        <p>Length: {activity.length}</p>
        <p>Duration: {activity.duration}</p>
        <p>Steps: {activity.steps}</p>
        <p>Calories: {activity.calories}</p>
      </div>
      <Button onClick={onDelete} color="secondary">
        Delete Activity
      </Button>
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
