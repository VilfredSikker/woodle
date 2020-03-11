/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateActivity = `subscription OnCreateActivity {
  onCreateActivity {
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
export const onUpdateActivity = `subscription OnUpdateActivity {
  onUpdateActivity {
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
export const onDeleteActivity = `subscription OnDeleteActivity {
  onDeleteActivity {
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
