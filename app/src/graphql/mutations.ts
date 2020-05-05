// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createFriendConnector = `mutation CreateFriendConnector(
  $input: CreateFriendConnectorInput!
  $condition: ModelFriendConnectorConditionInput
) {
  createFriendConnector(input: $input, condition: $condition) {
    id
    friendID
    connectorID
    friend {
      id
      friendName
      connectors {
        nextToken
      }
      activities {
        nextToken
      }
    }
    connector {
      id
      username
      activities {
        nextToken
      }
      friends {
        nextToken
      }
    }
  }
}
`;
export const updateFriendConnector = `mutation UpdateFriendConnector(
  $input: UpdateFriendConnectorInput!
  $condition: ModelFriendConnectorConditionInput
) {
  updateFriendConnector(input: $input, condition: $condition) {
    id
    friendID
    connectorID
    friend {
      id
      friendName
      connectors {
        nextToken
      }
      activities {
        nextToken
      }
    }
    connector {
      id
      username
      activities {
        nextToken
      }
      friends {
        nextToken
      }
    }
  }
}
`;
export const deleteFriendConnector = `mutation DeleteFriendConnector(
  $input: DeleteFriendConnectorInput!
  $condition: ModelFriendConnectorConditionInput
) {
  deleteFriendConnector(input: $input, condition: $condition) {
    id
    friendID
    connectorID
    friend {
      id
      friendName
      connectors {
        nextToken
      }
      activities {
        nextToken
      }
    }
    connector {
      id
      username
      activities {
        nextToken
      }
      friends {
        nextToken
      }
    }
  }
}
`;
export const createFriend = `mutation CreateFriend(
  $input: CreateFriendInput!
  $condition: ModelFriendConditionInput
) {
  createFriend(input: $input, condition: $condition) {
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
export const updateFriend = `mutation UpdateFriend(
  $input: UpdateFriendInput!
  $condition: ModelFriendConditionInput
) {
  updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = `mutation DeleteFriend(
  $input: DeleteFriendInput!
  $condition: ModelFriendConditionInput
) {
  deleteFriend(input: $input, condition: $condition) {
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
export const createActivity = `mutation CreateActivity(
  $input: CreateActivityInput!
  $condition: ModelActivityConditionInput
) {
  createActivity(input: $input, condition: $condition) {
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
export const updateActivity = `mutation UpdateActivity(
  $input: UpdateActivityInput!
  $condition: ModelActivityConditionInput
) {
  updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = `mutation DeleteActivity(
  $input: DeleteActivityInput!
  $condition: ModelActivityConditionInput
) {
  deleteActivity(input: $input, condition: $condition) {
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
