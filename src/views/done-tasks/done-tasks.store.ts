import {
  Action,
  Module,
  Mutation,
  VuexModule,
}                from 'vuex-module-decorators';
import { ITodo } from '@/interfaces/todo-app.interface';

@Module({ namespaced: true })
export default class DoneTasksStore extends VuexModule {
  private doneTodos: Array<ITodo> = [];

  @Mutation
  setDone(done: Array<ITodo>): void {
    this.doneTodos = done;
  }

  @Action
  getDone(): void {
    const doneTodos: Array<ITodo> = this.context.rootState.todos
      .filter((todo: { isDone: boolean }) => todo.isDone);
    this.context.commit('setDone', doneTodos);
  }
}
