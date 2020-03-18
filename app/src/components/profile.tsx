import Amplify, { API, graphqlOperation } from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../aws-exports"
import { AppContext } from "./context/app-context"
import * as queries from "../graphql/queries"
import { User, Activity } from "../shared-interfaces"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import TabPanel from "./basics/tabpanel/tabpanel"

Amplify.configure(aws_exports)

const Profile = () => {
  const [users, setUsers] = useState<User[]>([])
  const [tabValue, setTabValue] = useState(0)
  const { contextState, setContextState } = useContext(AppContext)
  const { jwtToken, user } = contextState
  const { activities, friends } = user

  useEffect(() => {
    getListUsers()

    console.log("jwt: ", jwtToken)
    console.log("user: ", user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getListUsers = async () => {
    const result = await API.graphql(graphqlOperation(queries.listUsers))

    createUsers(result.data)
  }

  const createUsers = (data: any) => {
    console.log(data)
    let users: User[] = data.listUsers.items.map((item: any) => {
      let user: User = {
        id: item.id,
        username: item.username,
        activities: item.activties,
        friends: item.friends
      }

      return user
    })

    setUsers(users)
  }

  const handleTabChange = (event: any, newValue: number) => {
    setTabValue(newValue)
  }

  const ActivityTab = activities ? (
    <div>
      {contextState.user.activities?.map((item: Activity) => (
        <div>
          <h2>{item.name}</h2>
          <p>{item.length}</p>
          <p>{item.duration}</p>
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  )

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
      </ul>

      <div>
        {users.map((user, index) => (
          <p key={index} onClick={() => console.log(user.username)}>
            {user.username}
          </p>
        ))}
      </div>
      <AppBar position="static" color="default">
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Stats" />
          <Tab label="Activities" />
          <Tab label="Friends" />
        </Tabs>
      </AppBar>
      <TabPanel index={0} value={tabValue}>
        <div></div>
      </TabPanel>
    </>
  )
}

export default Profile
