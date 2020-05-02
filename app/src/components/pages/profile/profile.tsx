import { Tab, Tabs } from "@material-ui/core"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../../../aws-exports"
import { deleteActivity, updateUser } from "../../../graphql/mutations"
import * as queries from "../../../graphql/queries"
import { Activity, User } from "../../../shared-interfaces"
import ActivityList from "../../basics/activity/activity-list"
import { AppContext } from "../../context/app-context"
import StyledCard from "./../../basics/card/card"
import StyledPaper from "./../../basics/paper/paper"
import styles from "./profile.module.scss"
import flame from "../../../icons/flame.svg"
import steps from "../../../icons/steps.svg"
import length from "../../../icons/length.svg"
import duration from "../../../icons/duration.svg"
import { UsersList } from "../../basics/friends/friends"

Amplify.configure(aws_exports)

interface ReformedState {
  activities: Activity[]
  friends: User[]
  users: User[]
}

interface UserStats {
  totalLength: number
  totalDuration: number
  totalCalories: number
  totalSteps: number
}

const Profile = () => {
  const [reformedState, setReformedState] = useState<ReformedState>(() => {
    const defaultState = {
      activities: [],
      friends: [],
      users: [],
    }

    return defaultState
  })

  const [userStats, setUserStats] = useState<UserStats>(() => {
    const stats: UserStats = {
      totalCalories: 0,
      totalDuration: 0,
      totalLength: 0,
      totalSteps: 0,
    }

    return stats
  })

  const [tabValue, setTabValue] = useState(0)
  const { contextState } = useContext(AppContext)
  const { jwtToken, user } = contextState

  useEffect(() => {
    getActivities()
    getUsers()
    //getFriends()

    console.log("jwt: ", jwtToken)
    console.log("user: ", user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getActivities = async () => {
    const filter = {
      userID: {
        eq: user.id,
      },
    }
    const result = await API.graphql(
      graphqlOperation(queries.listActivitys, { filter: filter })
    )

    createActivities(result)
  }

  const getUsers = async () => {
    const result = await API.graphql(graphqlOperation(queries.listUsers))
    const users = result.data.listUsers.items

    setReformedState({ ...reformedState, users: users })
  }

  // const getFriends = async () => {
  //   const filter = {
  //     userID: {
  //       eq: user.id,
  //     },
  //   }
  //   const result = await API.graphql(
  //     graphqlOperation(queries.getUser, { id: filter })
  //   )
  //   createFriends(result)
  // }

  const createActivities = (result: any) => {
    const items = result.data.listActivitys.items

    let activities: Activity[] = items.map((item: Activity) => {
      let activity: Activity = {
        id: item.id,
        userID: item.userID,
        name: item.name,
        length: item.length,
        duration: item.duration,
        calories: item.calories,
        steps: item.steps,
        type: item.type,
      }

      return activity
    })
    createStats(activities)

    setReformedState({ ...reformedState, activities: activities })
  }

  // const createFriends = (result: any) => {
  //   let items = result.data.listUsers.items

  //   let friends: Friend[] = items.map((item: User) => {
  //     let user: Friend = {
  //       id: item.id,
  //       username: item.username,
  //     }

  //     return user
  //   })

  //   setReformedState({ ...reformedState, friends: friends })
  // }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  const FriendsTab = (
    <div>
      {reformedState.friends.map((friend) => (
        <div>
          <h2>{friend.username}</h2>
        </div>
      ))}
    </div>
  )

  const createStats = (activities: Activity[]) => {
    var stats: UserStats = {
      totalCalories: 0,
      totalDuration: 0,
      totalLength: 0,
      totalSteps: 0,
    }

    activities.forEach((element: Activity) => {
      const cals = element.calories
        ? element.calories + stats.totalCalories
        : stats.totalCalories
      const duration = element.duration
        ? element.duration + stats.totalDuration
        : stats.totalDuration
      const length = element.length
        ? element.length + stats.totalLength
        : stats.totalLength
      const steps = element.steps
        ? element.steps + stats.totalSteps
        : stats.totalSteps

      stats = {
        totalCalories: cals,
        totalDuration: duration,
        totalLength: length,
        totalSteps: steps,
      }
    })

    setUserStats(stats)
  }

  const StatsTab = (
    <div className={styles.statsContainer}>
      <StyledCard elevation={2}>
        <img src={length} className={styles.icon} alt="length icon" />
        <div>Total Length:</div>
        <div className={styles.statValue}>
          {userStats.totalLength.toFixed(2)} meters
        </div>
      </StyledCard>
      <StyledCard elevation={2}>
        <img src={duration} className={styles.icon} alt="duration icon" />
        <div>Total Duration:</div>
        <div className={styles.statValue}>
          {userStats.totalDuration.toFixed(2)} seconds
        </div>
      </StyledCard>
      <StyledCard elevation={2}>
        <img src={flame} className={styles.icon} alt="calories icon" />
        <div>Total Calories:</div>
        <div className={styles.statValue}>
          {userStats.totalCalories} calories
        </div>
      </StyledCard>
      <StyledCard elevation={2}>
        <img src={steps} className={styles.icon} alt="steps icon" />
        <div>Total Steps:</div>
        <div className={styles.statValue}>{userStats.totalSteps} steps</div>
      </StyledCard>
    </div>
  )

  const handleDeleteActivity = (activityID: string) => {
    const input = {
      id: activityID,
    }

    API.graphql(graphqlOperation(deleteActivity, { input: input }))

    getActivities()
  }

  const handleAddFriend = (userId: string) => {
    const input = {
      id: userId,
    }

    API.graphql(graphqlOperation(updateUser, { input: input }))
  }

  return (
    <>
      <StyledPaper position="sticky" color="default">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          variant="fullWidth"
          className={styles.statsTabs}
        >
          <Tab label="Stats" />
          <Tab label="Activities" />
          <Tab label="Friends" />
          <Tab label="All Users" />
        </Tabs>
      </StyledPaper>

      {0 === tabValue && StatsTab}
      {1 === tabValue && (
        <ActivityList
          activities={reformedState.activities}
          handleDeleteActivity={(id: string) => handleDeleteActivity(id)}
        />
      )}
      {2 === tabValue && FriendsTab}
      {3 === tabValue && (
        <UsersList
          users={reformedState.users}
          onAddUserClicked={(id: string) => handleAddFriend(id)}
        />
      )}
    </>
  )
}

export default Profile
