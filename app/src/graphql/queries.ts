// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUserByName = `query GetUserByName($username: String!) {
  getUserByName(username: $username) {
    id
    username
    activities {
      items {
        id
        userID
        name
        length
        calories
        duration
        steps
      }
      nextToken
    }
    friends {
      items {
        id
        friendID
        connectorID
      }
      nextToken
    }
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    activities {
      items {
        id
        userID
        name
        length
        calories
        duration
        steps
        path {
          lat
          lng
        }
      }
      nextToken
    }
    friends {
      items {
        id
        friendID
        connectorID
        friend {
          id
          friendName
          activities {
            items {
              id
              name
              length
              duration
              calories
              steps
              path {
                lat
                lng
              }
            }
          }
        }
      }
      nextToken
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
export const getFriend = `query GetFriend($id: ID!) {
  getFriend(id: $id) {
    id
    friendName
    connectors {
      items {
        id
        friendID
        connectorID
      }
      nextToken
    }
    activities {
      items {
        id
        userID
        name
        length
        calories
        duration
        steps
      }
      nextToken
    }
  }
}
`;
export const listFriends = `query ListFriends(
  $filter: ModelFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      friendName
      connectors {
        nextToken
      }
      activities {
        nextToken
      }
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
      length
      calories
      duration
      steps
      path {
        lat
        lng
      }
    }
    nextToken
  }
}
`;
