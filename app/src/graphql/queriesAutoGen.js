/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    name
    activites {
      id
      name
      type
      length
      calories
      duration
      steps
    }
    friends {
      name
      activites {
        id
        name
        type
        length
        calories
        duration
        steps
      }
      friends {
        name
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
      name
      activites {
        id
        name
        type
        length
        calories
        duration
        steps
      }
      friends {
        name
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
