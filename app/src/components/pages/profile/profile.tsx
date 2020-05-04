import { Tab, Tabs } from "@material-ui/core"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../../../aws-exports"
import {
  createFriend,
  deleteActivity,
  deleteFriend,
} from "../../../graphql/mutations"
import { listActivitys, listFriends, listUsers } from "../../../graphql/queries"
import duration from "../../../icons/duration.svg"
import flame from "../../../icons/flame.svg"
import length from "../../../icons/length.svg"
import steps from "../../../icons/steps.svg"
import { Activity, Friend, User } from "../../../shared-interfaces"
import ActivityList from "../../basics/activity/activity-list"
import { FriendsList, UsersList } from "../../basics/friends/friends"
import FriendDetailsModal from "../../basics/modal/FriendDetailsModal"
import { AppContext } from "../../context/app-context"
import StyledCard from "./../../basics/card/card"
import StyledPaper from "./../../basics/paper/paper"
import styles from "./profile.module.scss"

Amplify.configure(aws_exports)

interface ReformedState {
  activities: Activity[]
  friends: Friend[]
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

  const [friendDetailsModal, setFriendDetailsModal] = useState(() => {
    const defaultState = {
      open: false,
      id: "",
    }

    return defaultState
  })

  const [tabValue, setTabValue] = useState(0)
  const { contextState } = useContext(AppContext)
  const { user } = contextState

  useEffect(() => {
    createData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createData = async () => {
    let users: User[] = []
    let activities: Activity[] = []
    let friends: Friend[] = []

    await getUsers()
      .then((result: User[]) => (users = result))
      .catch((err) => console.log("getUsers Error: ", err))

    await getActivities()
      .then((result: Activity[]) => {
        activities = result
        createStats(activities)
      })
      .catch((err) => console.log("getActivites Error: ", err))

    await getFriends()
      .then((result: Friend[]) => (friends = result))
      .catch((err) => console.log("getFriends Error: ", err))

    setReformedState({
      ...reformedState,
      users: users,
      activities: activities,
      friends: friends,
    })
  }

  const getActivities = async () => {
    const filter = {
      userID: {
        eq: user.id,
      },
    }
    const result = await API.graphql(
      graphqlOperation(listActivitys, { filter: filter })
    )
    const activitiesResult = result.data.listActivitys.items
    const activities = createActivities(activitiesResult)

    return activities
  }

  const getUsers = async () => {
    const filter = {
      username: {
        ne: user.username,
      },
    }
    const result = await API.graphql(
      graphqlOperation(listUsers, { filter: filter })
    )
    const usersResult = result.data.listUsers.items

    const users = usersResult.map((item: User) => {
      return {
        id: item.id,
        username: item.username,
        friends: item.friends,
        activities: item.activities,
      }
    })

    return users
  }

  const getFriends = async () => {
    const filter = {
      userID: {
        eq: user.id,
      },
    }
    const result = await API.graphql(
      graphqlOperation(listFriends, { id: filter })
    )
    const friends = result.data.listFriends.items

    return friends
  }

  const createActivities = (result: any) => {
    const items = result

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
        path: item.path,
      }

      return activity
    })

    return activities
  }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

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
      .then((result: Activity[]) => {
        setReformedState({ ...reformedState, activities: result })
        createStats(result)
      })
      .catch((err) => console.log("Error when getting activities: ", err))
  }

  const handleAddFriend = async (id: string, username: string) => {
    const filter = {
      userID: {
        eq: user.id,
      },
    }

    const friendsResult = await API.graphql(
      graphqlOperation(listFriends, { id: filter })
    )

    const friends: Friend[] = friendsResult.data.listFriends.items

    const filteredFriends = friends.filter((friend: Friend) => friend.id === id)

    if (filteredFriends.length === 0) {
      const input: Friend = {
        id: id,
        username: username,
        userID: user.id,
      }

      await API.graphql(graphqlOperation(createFriend, { input: input }))
      getFriends()
        .then((result: Friend[]) =>
          setReformedState({ ...reformedState, friends: result })
        )
        .catch((err) => console.log("Error when getting friends: ", err))
    } else {
      console.log("User is already a friend: ", username)
    }
  }

  const handleRemoveFriend = async (id: string) => {
    const input = {
      id: id,
    }

    await API.graphql(graphqlOperation(deleteFriend, { input: input }))
    getFriends()
      .then((result: Friend[]) =>
        setReformedState({ ...reformedState, friends: result })
      )
      .catch((err) => console.log("Error when getting friends: ", err))
  }

  const handleFriendDetails = (id: string) => {
    setFriendDetailsModal({ id: id, open: true })
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
        <>
          <ActivityList
            activities={reformedState.activities}
            handleDeleteActivity={(id: string) => handleDeleteActivity(id)}
          />
        </>
      )}
      {2 === tabValue && (
        <>
          <FriendDetailsModal
            id={friendDetailsModal.id}
            open={friendDetailsModal.open}
            handleClose={() =>
              setFriendDetailsModal({ ...friendDetailsModal, open: false })
            }
          />

          <FriendsList
            friends={reformedState.friends}
            onFriendDetailsClicked={(id: string) => handleFriendDetails(id)}
            onRemoveFriendClicked={(id: string) => handleRemoveFriend(id)}
          />
        </>
      )}
      {3 === tabValue && (
        <>
          <UsersList
            users={reformedState.users}
            onAddUserClicked={(id: string, username: string) =>
              handleAddFriend(id, username)
            }
          />
        </>
      )}
    </>
  )
}

export default Profile
