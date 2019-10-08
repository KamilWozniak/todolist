import {
  Action,
  Module,
  Mutation,
  VuexModule,
}                                              from 'vuex-module-decorators';
import { Importance, ITaskDescription, ITodo } from '@/interfaces/todo-app.interface';

@Module({ namespaced: true })
export default class TodoAppStore extends VuexModule {
  selectedImportance: Importance = Importance.NORMAL;
  identifier: number = 0;
  isInputVisible: boolean = false;

  @Mutation
  increaseIdentifier(): void {
    this.identifier += 1;
  }

  @Mutation
  toggleInputVisibility(): void {
    this.isInputVisible = !this.isInputVisible;
  }

  @Mutation
  setTaskImportance(importance: Importance): void {
    this.selectedImportance = importance;
  }

  @Action
  deleteTodo(id: number): void {
    const newTodos: Array<ITodo> = this.context.rootState.todos
      .filter((todo: { id: number; }) => todo.id !== id);
    this.context.commit('setTodos', newTodos, { root: true });
  }

  @Action
  addTodo(taskDescription: ITaskDescription) {
    this.context.rootState.todos.push({
      id: this.identifier,
      title: taskDescription.title,
      importance: taskDescription.importance,
      isDone: false,
    });
    this.context.commit('increaseIdentifier');
  }

  @Action
  toggleTodo(id: number): void {
    const todos: Array<ITodo> = this.context.rootState.todos;
    const index: number = todos.findIndex((item: {id: number}) => item.id === id);
    todos[index].isDone = !todos[index].isDone;
  }
}
