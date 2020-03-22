import { AppBar, Tab, Tabs, Card, Paper } from "@material-ui/core"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../../../aws-exports"
import * as queries from "../../../graphql/queries"
import { Activity, Friend, User } from "../../../shared-interfaces"
import TabPanel from "../../basics/tabpanel/tabpanel"
import { AppContext } from "../../context/app-context"
import styles from "./profile.module.scss"
import StyledPaper from "./../../basics/paper/paper"
import StyledCard from "./../../basics/card/card"
import { statSync } from "fs"

Amplify.configure(aws_exports)

interface ReformedState {
  activities: Activity[]
  friends: Friend[]
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
      friends: []
    }

    return defaultState
  })

  const [userStats, setUserStats] = useState<UserStats>(() => {
    const stats: UserStats = {
      totalCalories: 0,
      totalDuration: 0,
      totalLength: 0,
      totalSteps: 0
    }

    return stats
  })

  const [tabValue, setTabValue] = useState(0)
  const { contextState, setContextState } = useContext(AppContext)
  const { jwtToken, user } = contextState

  useEffect(() => {
    getActivities()
    //getFriends()

    console.log("jwt: ", jwtToken)
    console.log("user: ", user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getActivities = async () => {
    const filter = {
      userID: {
        eq: user.id
      }
    }
    const result = await API.graphql(
      graphqlOperation(queries.listActivitys, { filter: filter })
    )
    console.log("act result: ", result)

    createActivities(result)
  }

  const getFriends = async () => {
    const filter = {
      userID: {
        eq: user.id
      }
    }
    const result = await API.graphql(
      graphqlOperation(queries.getUser, { id: filter })
    )
    createFriends(result)
  }

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
        type: item.type
      }

      return activity
    })
    createStats(activities)

    setReformedState({ ...reformedState, activities: activities })
  }

  const createFriends = (result: any) => {
    let items = result.data.listUsers.items

    let friends: Friend[] = items.map((item: User) => {
      let user: Friend = {
        id: item.id,
        username: item.username
      }

      return user
    })

    setReformedState({ ...reformedState, friends: friends })
  }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  const ActivityTab = (
    <div>
      {reformedState.activities.map((item: Activity, index: number) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.length}</p>
          <p>{item.duration}</p>
        </div>
      ))}
    </div>
  )

  const FriendsTab = (
    <div>
      {reformedState.friends.map((friend: Friend) => (
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
      totalSteps: 0
    }

    console.log("createStats with: ", activities)

    activities.forEach((element: Activity) => {
      console.log("Activity: ", element)
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
      console.log("get stats: ", cals, duration, length, steps)
      stats = {
        totalCalories: cals,
        totalDuration: duration,
        totalLength: length,
        totalSteps: steps
      }
    })

    console.log("Stats: ", stats)

    setUserStats(stats)
  }

  const StatsTab = (
    <div className={styles.statsContainer}>
      <StyledCard elevation={2}>
        Total Length: {userStats.totalLength}{" "}
      </StyledCard>
      <StyledCard elevation={2}>
        Total Duration: {userStats.totalDuration}{" "}
      </StyledCard>
      <StyledCard elevation={2}>
        Total Calories: {userStats.totalCalories}{" "}
      </StyledCard>
      <StyledCard elevation={2}>
        Total Steps: {userStats.totalSteps}{" "}
      </StyledCard>
    </div>
  )

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
      </ul>

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
        </Tabs>
      </StyledPaper>

      {0 === tabValue && StatsTab}
      {1 === tabValue && ActivityTab}
      {2 === tabValue && FriendsTab}
    </>
  )
}

export default Profile
