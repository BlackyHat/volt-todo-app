export type TUserTodo = {
  id: number
  title:string
  description:string
  completed: boolean 
}

export enum FilterStatus {
  All = 'ALL',
  Active = "ACTIVE",
  Completed = "COMPLETED",
}