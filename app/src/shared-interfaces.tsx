export interface User {
  id: string
  username: string
  friends: User[] | null
  activities: Activity[] | null
}

export interface Activity {
  userID: string
  name: string
  id?: string
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
