import { Button } from "@material-ui/core"
import React from "react"
import { Activity } from "../../../shared-interfaces"
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

  const openContainer = (
    <div>
      <div>
        <p onClick={onContainerClicked}>{activity.name}</p>
        <p>
          Length: {activity.length !== undefined ? activity.length : 0} meters
        </p>
        <p>
          Duration: {activity.duration !== undefined ? activity.duration : 0}{" "}
          seconds
        </p>
        <p>Steps: {activity.steps !== undefined ? activity.steps : 0} </p>
        <p>
          Calories: {activity.calories !== undefined ? activity.calories : 0}
        </p>
        <div>
          {activity.path ? <MiniMap path={activity.path} /> : <p>No Path</p>}
        </div>
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
