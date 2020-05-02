import React, { useState, useEffect } from "react"
import { User } from "../../../shared-interfaces"
import { API, graphqlOperation } from "aws-amplify"
import * as queries from "../../../graphql/queries"
import { Button } from "@material-ui/core"
import StyledPaper from "../paper/paper"

interface UsersListProps {
  users: User[]
  onAddUserClicked: (id: string) => void
}

interface FriendsListProps {
  friends: User[]
  onRemoveFriendClicked: (id: string) => void
}

export const UsersList = (props: UsersListProps) => {
  const { users, onAddUserClicked } = props
  return (
    <li>
      {users.map((user) => (
        <StyledPaper>
          <div>
            <p>{user.username}</p>
            <p>Total Friends: {user.friends ? user.friends.length : 0} </p>
            <p>
              Total Activities: {user.activities ? user.activities.length : 0}{" "}
            </p>
          </div>
          <Button onClick={() => onAddUserClicked(user.id)}>Add Users</Button>
        </StyledPaper>
      ))}
    </li>
  )
}

export const FriendsList = (props: FriendsListProps) => {
  const { friends, onRemoveFriendClicked } = props
  return (
    <li>
      {friends.map((friend) => (
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
      ))}
    </li>
  )
}
