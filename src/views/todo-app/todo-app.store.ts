import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { ITodo }                        from '@/types/types';

@Module({ namespaced: true })
export default class TodoAppStore extends VuexModule {
  todos: Array<ITodo> = [{ id: 0, title: 'first todo' }];
  identifier: number = 0;
  isInputVisible: boolean = false;

  @Mutation
  addTodo(title: string): void {
    this.todos.push({
      id: this.identifier + 1,
      title,
    });
  }

  @Mutation
  deleteTodo(id: any): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @Mutation
  toggleInputVisibility(): void {
    this.isInputVisible = !this.isInputVisible;
  }
}
