/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createActivity = `mutation CreateActivity(
  $input: CreateActivityInput!
  $condition: ModelActivityConditionInput
) {
  createActivity(input: $input, condition: $condition) {
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
export const updateActivity = `mutation UpdateActivity(
  $input: UpdateActivityInput!
  $condition: ModelActivityConditionInput
) {
  updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = `mutation DeleteActivity(
  $input: DeleteActivityInput!
  $condition: ModelActivityConditionInput
) {
  deleteActivity(input: $input, condition: $condition) {
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
