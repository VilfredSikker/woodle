// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
`;
export const createFriend = `mutation CreateFriend(
  $input: CreateFriendInput!
  $condition: ModelFriendConditionInput
) {
  createFriend(input: $input, condition: $condition) {
    id
    userID
    username
    activities {
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
    userID
    username
    activities {
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
    userID
    username
    activities {
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
export const updateActivity = `mutation UpdateActivity(
  $input: UpdateActivityInput!
  $condition: ModelActivityConditionInput
) {
  updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = `mutation DeleteActivity(
  $input: DeleteActivityInput!
  $condition: ModelActivityConditionInput
) {
  deleteActivity(input: $input, condition: $condition) {
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
