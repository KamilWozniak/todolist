import Vue                    from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState }          from '@/types/types';

Vue.use(Vuex);

const oldstore: StoreOptions<RootState> = {
  state: {
    todos: [{ id: 0, title: 'first todo' }],
    identifier: 0,
    isInputVisible: false,
  },
  mutations: {
    addTodo(state, payload: string): void {
      state.todos.push({ id: state.identifier + 1, title: payload });
      state.identifier += 1;
    },

    deleteTodo(state, payload: string): void {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },

    toggleInputVisibility(state): void {
      state.isInputVisible = !state.isInputVisible;
    },
  },
};

export default new Vuex.Store<RootState>(oldstore);
