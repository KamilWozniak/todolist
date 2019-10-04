export interface ITodo {
  title: string,
  id: any,
}

export interface RootState {
  todos: Array<ITodo>,
  identifier: number,
  isInputVisible: boolean,
}
