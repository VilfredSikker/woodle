// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onCreateActivity = `subscription OnCreateActivity($owner: String!) {
  onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = `subscription OnUpdateActivity($owner: String!) {
  onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = `subscription OnDeleteActivity($owner: String!) {
  onDeleteActivity(owner: $owner) {
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
