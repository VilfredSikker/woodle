import React, { useState } from "react"
import { Activity } from "../../../shared-interfaces"
import StyledPaper from "../paper/paper"
import MyActivity from "./activity"
import styles from "./activity-list.module.scss"

interface ActivityListProps {
  activities: Activity[]
  handleDeleteActivity?: (id: string) => void
}

const ActivityList = (props: ActivityListProps) => {
  const [openActivity, setOpenActivity] = useState<number | undefined>(
    undefined
  )
  const { activities, handleDeleteActivity } = props

  const handleContainerClicked = (index: number) => {
    if (index === openActivity) {
      setOpenActivity(undefined)
    } else {
      setOpenActivity(index)
    }
  }

  const list = activities.map((item: Activity, index: number) => {
    return (
      <StyledPaper key={index}>
        <MyActivity
          activity={item}
          index={index}
          open={openActivity === index}
          onContainerClicked={() => handleContainerClicked(index)}
          onDelete={
            handleDeleteActivity
              ? () => handleDeleteActivity(item.id)
              : undefined
          }
        />
      </StyledPaper>
    )
  })

  return (
    <div className={styles.list}>
      {list.length === 0 ? <h2>No Activities</h2> : list}
    </div>
  )
}

export default ActivityList
