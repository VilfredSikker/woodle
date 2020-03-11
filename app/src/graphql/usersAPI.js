import Amplify, { API, graphqlOperation } from "aws-amplify"
import aws_exports from "../aws-exports"

Amplify.configure(aws_exports)

export const getUserQuery = `query GetUser($id: ID!) {
  getUser(id: $id) {
    username
    activities {
      name
    }
    friends {
      username
    }
  }
}
`
export const getUser = async id => {
  const user = await API.graphql(graphqlOperation(getUserQuery, { id: id }))
  console.log("pure user: ", user)
  return user
}

export const listUsersQuery = `query ListUsers {
  listUsers {
    items {
      id
      username
      activities {
        name
      }
      friends {
        username
      }
    }
  }
}
`

export const listUsers = async () => {
  const allUsers = await API.graphql(graphqlOperation(listUsersQuery))
  alert(JSON.stringify(allUsers))
  return allUsers
}

export const createUserMutation = `mutation CreateUser(
  $username: String!
) {
  createUser(username: $username) {
    username
  }
}
`

export const createUser = async userName => {
  const input = {
    username: userName
  }

  const newUser = await API.graphql(graphqlOperation(createUserMutation, input))
    .then(data => console.log("createUser data: ", data))
    .catch(e => console.log("error with createUser: ", e))
  console.log("adding user: ", JSON.stringify(newUser))
}
