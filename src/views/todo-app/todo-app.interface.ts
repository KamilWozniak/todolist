export interface ITodo {
  title: string,
  id: any,
  importance: Importance,
  isDone: boolean,
}

export enum Importance {
  NORMAL,
  MEDIUM,
  HIGH,
  EXTREME,
}

export interface ITaskDescription {
  title: string,
  importance: Importance,
}
