import React, { useState, useEffect } from "react"
import aws_exports from "../aws-exports"
import Amplify from "aws-amplify"
import { useAppContextProvider } from "./context/app-context"
import { listUsers, getUser, createUser } from "../graphql/usersAPI"

Amplify.configure(aws_exports)

const Profile = () => {
  const [users, setUsers] = useState([])
  const { user } = useAppContextProvider()

  useEffect(() => {
    const data = getListUsers()
    console.log("Data: ", data)
  }, [])

  const getListUsers = async () => {
    let allUsers

    listUsers()
      .then(data => (allUsers = data))
      .catch(e => console.log("Error with getUsers: ", e))

    allUsers && setUsers(allUsers)
  }

  const fetchUser = async (username: number) => {
    let user

    getUser(username)
      .then(data => (user = data))
      .catch(e => console.log("Error with getUser: ", e))

    console.log("getUser result:", user)
  }

  const addTestUser = async () => {
    createUser(user)
  }

  const handleButtonClicked = () => {
    addTestUser()
  }

  const handleButtonClicked1 = () => {
    fetchUser(1)
  }

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
        <button onClick={handleButtonClicked}>Add test user</button>
        <button onClick={handleButtonClicked1}>Get testUser</button>
      </ul>

      <ul>{users.length > 0 && users.map(user => <li>{user}</li>)}</ul>
    </>
  )
}

export default Profile
