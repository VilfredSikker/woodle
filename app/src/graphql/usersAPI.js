import Amplify, { API, graphqlOperation } from "aws-amplify"
import aws_exports from "../aws-exports"
import * as mutations from "./mutations"
import * as queries from "./queries"

Amplify.configure(aws_exports)

export const getUser = async id => {
  const user = await API.graphql(graphqlOperation(queries.getUser, { id: id }))
  return user
}

export const listUsers = async () => {
  const data = await API.graphql(graphqlOperation(queries.listUsers))
  return data
}

export const createUser = async userName => {
  const input = {
    username: userName
  }

  const newUser = await API.graphql(
    graphqlOperation(mutations.createUser, { input: input })
  )
    .then(data => console.log("createUser data: ", data))
    .catch(e => console.log("error with createUser: ", e))
}

export const deleteUser = async id => {
  const input = {
    id: id
  }

  const deletedUser = await API.graphql(
    graphqlOperation(mutations.deleteUser, { input: input })
  )
    .then(data => console.log("Deleting user: ", data))
    .catch(e => console.log("Error on deleing user: ", id, e))
}
