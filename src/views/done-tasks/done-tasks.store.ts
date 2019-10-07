import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { Importance, ITodo }            from '@/views/todo-app/todo-app.interface';

@Module({ namespaced: true })
export default class DoneTasksStore extends VuexModule {
  doneTodos: Array<ITodo> = [{
    id: -1, importance: Importance.EXTREME, isDone: false, title: 'First Done todo',
  },
  {
    id: -2, importance: Importance.MEDIUM, isDone: false, title: 'Second Done todo',
  },
  ];

  @Mutation
  deleteTodo(id: number): void {
    this.doneTodos = this.doneTodos.filter(todo => todo.id !== id);
  }
}
