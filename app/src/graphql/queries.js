/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    activities {
      id
      name
      type
      length
      calories
      duration
      steps
    }
    friends {
      id
      username
      activities {
        id
        name
        type
        length
        calories
        duration
        steps
      }
      friends {
        id
        username
      }
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
      activities {
        id
        name
        type
        length
        calories
        duration
        steps
      }
      friends {
        id
        username
      }
    }
    nextToken
  }
}
`;
export const getActivity = `query GetActivity($id: ID!) {
  getActivity(id: $id) {
    id
    name
    type
    length
    calories
    duration
    steps
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
