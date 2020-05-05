import { Button } from "@material-ui/core"
import React from "react"
import { Friend, User } from "../../../shared-interfaces"
import StyledPaper from "../paper/paper"
import styles from "./friends.module.scss"

interface UsersListProps {
  users: User[]
  onAddUserClicked: (id: string, username: string) => void
}

interface FriendsListProps {
  friends: Friend[]
  onFriendDetailsClicked: (id: string) => void
  onRemoveFriendClicked: (id: string) => void
}

export const UsersList = (props: UsersListProps) => {
  const { users, onAddUserClicked } = props
  const list = users.map((user: User, index) => (
    <li key={index}>
      <StyledPaper>
        <div>
          <p>{user.username}</p>
        </div>
        <Button
          color="primary"
          onClick={() => onAddUserClicked(user.id, user.username)}
        >
          Add User
        </Button>
      </StyledPaper>
    </li>
  ))
  return <ul className={styles.list}>{list}</ul>
}

export const FriendsList = (props: FriendsListProps) => {
  const { friends, onRemoveFriendClicked, onFriendDetailsClicked } = props
  const list = friends.map((friend: Friend, index) => (
    <li key={index}>
      <StyledPaper>
        <div>
          <p>{friend.friendName}</p>
          <Button
            color="primary"
            onClick={() => onFriendDetailsClicked(friend.id)}
          >
            See Activities
          </Button>
        </div>
        <Button
          color="secondary"
          onClick={() => onRemoveFriendClicked(friend.id)}
        >
          Remove Friend
        </Button>
      </StyledPaper>
    </li>
  ))
  return <ul className={styles.list}>{list}</ul>
}
