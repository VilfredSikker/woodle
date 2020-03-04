export const listUsers = `query listUsers {
  listUsers {
    items {
      username
    }
  }
}`

export const addUser = `mutation createUser($username:String!) {
  createUser(input: {
    username:$username

  }){
    id
    username
  }
}`
