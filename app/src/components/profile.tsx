import React, { useState, useEffect } from "react"
import aws_exports from "../aws-exports"
import Amplify from "aws-amplify"
import { useAppContextProvider } from "./context/app-context"
import { listUsers, getUser, createUser, deleteUser } from "../graphql/usersAPI"

Amplify.configure(aws_exports)

interface User {
  id: string
  username: string
  activities: any | null
  friends: User[] | null
}

const Profile = () => {
  const [users, setUsers] = useState<User[]>([])
  const { jwtToken, user } = useAppContextProvider()

  useEffect(() => {
    getListUsers()

    console.log("jwt: ", jwtToken)
    console.log("user: ", user)
  }, [])

  const getListUsers = async () => {
    listUsers()
      .then(data => {
        createUsers(data.data.listUsers.items)
      })
      .catch(e => console.log("Error with getUsers: ", e))
  }

  const createUsers = (data: any) => {
    console.log("Create users input: ", data)
    let users: User[] = data.map((item: any) => {
      let user: User = {
        id: item.id,
        username: item.username,
        activities: item.activties,
        friends: item.friends
      }

      return user
    })

    console.log("Create users output: ", users)

    setUsers(users)
  }

  const fetchUser = async (username: number) => {
    let user

    getUser(username)
      .then(data => (user = data))
      .catch(e => console.log("Error with getUser: ", e))
  }

  const addTestUser = async () => {
    createUser("Another Test")
  }

  const handleButtonClicked = () => {
    addTestUser()
  }

  const handleButtonClicked1 = () => {
    fetchUser(1)
  }

  const handleDeleteUser = (id: string) => {
    deleteUser(id)
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

      <div>
        {users.map((user, index) => (
          <p key={index} onClick={() => handleDeleteUser(user.id)}>
            {user.username}
          </p>
        ))}
      </div>
    </>
  )
}

export default Profile
