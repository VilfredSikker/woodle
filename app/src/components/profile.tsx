import React, { useState, useEffect } from "react"
import aws_exports from "../aws-exports"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { useAppContextProvider } from "./context/app-context"
import { listUsers, addUser } from "../graphql/usersAPI"
Amplify.configure(aws_exports)

const Profile = () => {
  const [users, setUsers] = useState([])
  const { user } = useAppContextProvider()

  useEffect(() => {
    const data = getListUsers()
    console.log("Data: ", data)
  }, [])

  const getListUsers = async () => {
    const allUsers = await API.graphql(graphqlOperation(listUsers))
    alert(JSON.stringify(allUsers))
    setUsers(allUsers)
  }

  const addTestUser = async () => {
    const user = {
      username: "TestUser"
    }

    const newUser = await API.graphql(graphqlOperation(addUser, user))
    alert(JSON.stringify(newUser))
  }

  const handleButtonClicked = () => {
    addTestUser()
  }

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
        <button onClick={handleButtonClicked}>Add test user</button>
      </ul>

      <ul>{users.length > 0 && users.map(user => <li>{user}</li>)}</ul>
    </>
  )
}

export default Profile
