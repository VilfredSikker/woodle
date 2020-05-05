// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onCreateFriendConnector = `subscription OnCreateFriendConnector {
  onCreateFriendConnector {
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
export const onUpdateFriendConnector = `subscription OnUpdateFriendConnector {
  onUpdateFriendConnector {
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
export const onDeleteFriendConnector = `subscription OnDeleteFriendConnector {
  onDeleteFriendConnector {
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
export const onCreateFriend = `subscription OnCreateFriend($owner: String!) {
  onCreateFriend(owner: $owner) {
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
export const onUpdateFriend = `subscription OnUpdateFriend($owner: String!) {
  onUpdateFriend(owner: $owner) {
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
export const onDeleteFriend = `subscription OnDeleteFriend($owner: String!) {
  onDeleteFriend(owner: $owner) {
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
export const onCreateActivity = `subscription OnCreateActivity($owner: String!) {
  onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = `subscription OnUpdateActivity($owner: String!) {
  onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = `subscription OnDeleteActivity($owner: String!) {
  onDeleteActivity(owner: $owner) {
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
