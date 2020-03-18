import { AppBar, Tab, Tabs } from "@material-ui/core"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../aws-exports"
import * as queries from "../graphql/queries"
import { Activity, Friend, User } from "../shared-interfaces"
import TabPanel from "./basics/tabpanel/tabpanel"
import { AppContext } from "./context/app-context"

Amplify.configure(aws_exports)

interface ReformedState {
  activities: Activity[]
  friends: Friend[]
}

const Profile = () => {
  const [reformedState, setReformedState] = useState<ReformedState>(() => {
    const defaultState = {
      activities: [],
      friends: []
    }

    return defaultState
  })

  const [tabValue, setTabValue] = useState(0)
  const { contextState, setContextState } = useContext(AppContext)
  const { jwtToken, user } = contextState

  useEffect(() => {
    getActivities()
    getFriends()

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

  const StatsTab = <div>StatsTab</div>

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
      </ul>

      <AppBar position="sticky" color="default">
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Stats" />
          <Tab label="Activities" />
          <Tab label="Friends" />
        </Tabs>
      </AppBar>
      {0 === tabValue && StatsTab}
      {1 === tabValue && ActivityTab}
      {2 === tabValue && FriendsTab}
    </>
  )
}

export default Profile
