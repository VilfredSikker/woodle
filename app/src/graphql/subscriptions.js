/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
export const onCreateActivity = `subscription OnCreateActivity($owner: String!) {
  onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = `subscription OnUpdateActivity($owner: String!) {
  onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = `subscription OnDeleteActivity($owner: String!) {
  onDeleteActivity(owner: $owner) {
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
