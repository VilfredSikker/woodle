/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateFriendConnectorInput = {
  id?: string | null,
  friendID: string,
  connectorID: string,
};

export type ModelFriendConnectorConditionInput = {
  friendID?: ModelIDInput | null,
  connectorID?: ModelIDInput | null,
  and?: Array< ModelFriendConnectorConditionInput | null > | null,
  or?: Array< ModelFriendConnectorConditionInput | null > | null,
  not?: ModelFriendConnectorConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFriendConnectorInput = {
  id: string,
  friendID?: string | null,
  connectorID?: string | null,
};

export type DeleteFriendConnectorInput = {
  id?: string | null,
};

export type CreateFriendInput = {
  id?: string | null,
  friendName: string,
};

export type ModelFriendConditionInput = {
  friendName?: ModelStringInput | null,
  and?: Array< ModelFriendConditionInput | null > | null,
  or?: Array< ModelFriendConditionInput | null > | null,
  not?: ModelFriendConditionInput | null,
};

export type UpdateFriendInput = {
  id: string,
  friendName?: string | null,
};

export type DeleteFriendInput = {
  id?: string | null,
};

export type CreateActivityInput = {
  id?: string | null,
  userID: string,
  name: string,
  length?: number | null,
  calories?: number | null,
  duration?: number | null,
  steps?: number | null,
  path?: Array< CoordinateInput | null > | null,
};

export type CoordinateInput = {
  lat?: number | null,
  lng?: number | null,
};

export type ModelActivityConditionInput = {
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  calories?: ModelFloatInput | null,
  duration?: ModelFloatInput | null,
  steps?: ModelIntInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActivityInput = {
  id: string,
  userID?: string | null,
  name?: string | null,
  length?: number | null,
  calories?: number | null,
  duration?: number | null,
  steps?: number | null,
  path?: Array< CoordinateInput | null > | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelFriendFilterInput = {
  id?: ModelIDInput | null,
  friendName?: ModelStringInput | null,
  and?: Array< ModelFriendFilterInput | null > | null,
  or?: Array< ModelFriendFilterInput | null > | null,
  not?: ModelFriendFilterInput | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  length?: ModelFloatInput | null,
  calories?: ModelFloatInput | null,
  duration?: ModelFloatInput | null,
  steps?: ModelIntInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateFriendConnectorMutationVariables = {
  input: CreateFriendConnectorInput,
  condition?: ModelFriendConnectorConditionInput | null,
};

export type CreateFriendConnectorMutation = {
  createFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateFriendConnectorMutationVariables = {
  input: UpdateFriendConnectorInput,
  condition?: ModelFriendConnectorConditionInput | null,
};

export type UpdateFriendConnectorMutation = {
  updateFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteFriendConnectorMutationVariables = {
  input: DeleteFriendConnectorInput,
  condition?: ModelFriendConnectorConditionInput | null,
};

export type DeleteFriendConnectorMutation = {
  deleteFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateFriendMutationVariables = {
  input: CreateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type CreateFriendMutation = {
  createFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateFriendMutationVariables = {
  input: UpdateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type UpdateFriendMutation = {
  updateFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteFriendMutationVariables = {
  input: DeleteFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type DeleteFriendMutation = {
  deleteFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type GetUserByNameQueryVariables = {
  username: string,
};

export type GetUserByNameQuery = {
  getUserByName:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFriendQueryVariables = {
  id: string,
};

export type GetFriendQuery = {
  getFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListFriendsQueryVariables = {
  filter?: ModelFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsQuery = {
  listFriends:  {
    __typename: "ModelFriendConnection",
    items:  Array< {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      userID: string,
      name: string,
      length: number | null,
      calories: number | null,
      duration: number | null,
      steps: number | null,
      path:  Array< {
        __typename: "Coordinate",
        lat: number | null,
        lng: number | null,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateFriendConnectorSubscription = {
  onCreateFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateFriendConnectorSubscription = {
  onUpdateFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteFriendConnectorSubscription = {
  onDeleteFriendConnector:  {
    __typename: "FriendConnector",
    id: string,
    friendID: string,
    connectorID: string,
    friend:  {
      __typename: "Friend",
      id: string,
      friendName: string,
      connectors:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
    },
    connector:  {
      __typename: "User",
      id: string,
      username: string,
      activities:  {
        __typename: "ModelActivityConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnectorConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateFriendSubscriptionVariables = {
  owner: string,
};

export type OnCreateFriendSubscription = {
  onCreateFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateFriendSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFriendSubscription = {
  onUpdateFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteFriendSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFriendSubscription = {
  onDeleteFriend:  {
    __typename: "Friend",
    id: string,
    friendName: string,
    connectors:  {
      __typename: "ModelFriendConnectorConnection",
      items:  Array< {
        __typename: "FriendConnector",
        id: string,
        friendID: string,
        connectorID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    activities:  {
      __typename: "ModelActivityConnection",
      items:  Array< {
        __typename: "Activity",
        id: string,
        userID: string,
        name: string,
        length: number | null,
        calories: number | null,
        duration: number | null,
        steps: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  owner: string,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  owner: string,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  owner: string,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    userID: string,
    name: string,
    length: number | null,
    calories: number | null,
    duration: number | null,
    steps: number | null,
    path:  Array< {
      __typename: "Coordinate",
      lat: number | null,
      lng: number | null,
    } | null > | null,
  } | null,
};
