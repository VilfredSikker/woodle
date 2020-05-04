import React, { useState, useEffect } from "react"
import { User, Friend } from "../../../shared-interfaces"
import { API, graphqlOperation } from "aws-amplify"
import * as queries from "../../../graphql/queries"
import { Button } from "@material-ui/core"
import StyledPaper from "../paper/paper"

interface UsersListProps {
  users: User[]
  onAddUserClicked: (id: string, username: string) => void
}

interface FriendsListProps {
  friends: Friend[]
  onRemoveFriendClicked: (id: string) => void
}

export const UsersList = (props: UsersListProps) => {
  const { users, onAddUserClicked } = props
  const list = users.map((user: User, index) => (
    <li key={index}>
      <StyledPaper>
        <div>
          <p>{user.username}</p>
          <p>Total Friends: {user.friends ? user.friends.length : 0} </p>
          <p>
            Total Activities: {user.activities ? user.activities.length : 0}{" "}
          </p>
        </div>
        <Button onClick={() => onAddUserClicked(user.id, user.username)}>
          Add User
        </Button>
      </StyledPaper>
    </li>
  ))
  return <ul>{list}</ul>
}

export const FriendsList = (props: FriendsListProps) => {
  const { friends, onRemoveFriendClicked } = props
  const list = friends.map((friend: Friend, index) => (
    <li key={index}>
      <StyledPaper>
        <div>
          <p>{friend.username}</p>
          <p>Friends </p>
          <p>Activities</p>
        </div>
        <Button onClick={() => onRemoveFriendClicked(friend.id)}>
          Remove Friend
        </Button>
      </StyledPaper>
    </li>
  ))
  return <ul>{list}</ul>
}
