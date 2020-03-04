import API, { graphqlOperation } from "@aws-amplify/api"
import PubSub from "@aws-amplify/pubsub"

import { createTodo } from "./graphql/mutations"

import awsconfig from "./../aws-exports"

export async function createDummyActivity(username) {
  const activity = {
    name: "awesome run",
    calories: 2470
  }

  const newActivity = await API.graphql(
    graphqlOperation(createActivity, { input: activity })
  )
  alert(JSON.stringify(newActivity))
}

const createActivity = `mutation createActivty($name:String!, $calories: Int) {
  createActivty(input:{
    name:$name,
    calores:$calories
  }){
    id
    name
    calories
  }
}`
