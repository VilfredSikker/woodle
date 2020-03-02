import React, { useState, useEffect } from "react"
import { getUser } from "../utils/auth"
import { useAppContextProvider } from "./context/app-context"
const Profile = () => {
  const { user } = useAppContextProvider()

  useEffect(() => {
    console.log(user)
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
