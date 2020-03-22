import React, { useState } from "react"
import { Activity } from "../../../shared-interfaces"
import StyledPaper from "../paper/paper"
import MyActivity from "./activity"
import { API, graphqlOperation } from "aws-amplify"
import { deleteActivity } from "../../../graphql/mutations"

interface ActivityListProps {
  activities: Activity[]
}

const ActivityList = (props: ActivityListProps) => {
  const [openActivity, setOpenActivity] = useState<number | undefined>(
    undefined
  )
  const { activities } = props

  const handleContainerClicked = (index: number) => {
    if (index === openActivity) {
      setOpenActivity(undefined)
    } else {
      setOpenActivity(index)
    }
  }

  const handleDeleteActivity = (activityID: string) => {
    const input = {
      id: activityID
    }

    const result = API.graphql(
      graphqlOperation(deleteActivity, { input: input })
    )
    console.log("Deleting activity: ", result)
  }

  const list = activities.map((item: Activity, index: number) => {
    return (
      <StyledPaper key={index}>
        <MyActivity
          activity={item}
          index={index}
          open={openActivity === index}
          onContainerClicked={() => handleContainerClicked(index)}
          onDelete={() => handleDeleteActivity(item.id)}
        />
      </StyledPaper>
    )
  })

  return <div>{list}</div>
}

export default ActivityList
