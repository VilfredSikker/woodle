// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUserByName = `query GetUserByName($username: String!) {
  getUserByName(username: $username) {
    id
    username
    activities {
      nextToken
    }
    friends {
      id
      username
    }
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    activities {
      nextToken
    }
    friends {
      id
      username
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
    }
    nextToken
  }
}
`;
export const getActivity = `query GetActivity($id: ID!) {
  getActivity(id: $id) {
    id
    userID
    name
    type
    length
    calories
    duration
    steps
    path {
      lat
      lng
    }
  }
}
`;
export const listActivitys = `query ListActivitys(
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      name
      type
      length
      calories
      duration
      steps
    }
    nextToken
  }
}
`;
