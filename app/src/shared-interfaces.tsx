export interface User {
  id: string
  username: string
  friends: User[] | null
  activities: Activity[] | null
}

export interface Friend {
  id: string
  username: string
}

export interface Activity {
  userID: string
  id: string
  name: string
  length?: number
  duration?: number
  calories?: number
  steps?: number
  type?: ActivityType
}

export enum ActivityType {
  SOLO,
  GROUP,
  SPONSORED
}
