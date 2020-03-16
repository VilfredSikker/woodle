import Amplify from "aws-amplify"
import React, { useContext, useEffect, useState } from "react"
import aws_exports from "../aws-exports"
import { createUser, deleteUser, getUser, listUsers } from "../graphql/usersAPI"
import { AppContext } from "./context/app-context"

Amplify.configure(aws_exports)

interface User {
  id: string
  username: string
  activities: any | null
  friends: User[] | null
}

const Profile = () => {
  const [users, setUsers] = useState<User[]>([])
  const { contextState, setContextState } = useContext(AppContext)
  const { jwtToken, user } = contextState

  useEffect(() => {
    getListUsers()

    console.log("jwt: ", jwtToken)
    console.log("user: ", user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getListUsers = async () => {
    listUsers()
      .then(data => {
        createUsers(data.data.listUsers.items)
      })
      .catch(e => console.log("Error with getUsers: ", e))
  }

  const createUsers = (data: any) => {
    let users: User[] = data.map((item: any) => {
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
    </>
  )
}

export default Profile
