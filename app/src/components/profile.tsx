import React, { useState, useEffect } from "react"
import { getUser } from "../utils/auth"
const Profile = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    const newUser = getUser()
    console.log(newUser)
  })

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
      </ul>
    </>
  )
}

export default Profile
