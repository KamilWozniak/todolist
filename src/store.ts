import Vuex           from 'vuex';
import Vue            from 'vue';
import { Importance } from '@/interfaces/todo-app.interface';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{
      id: -1, importance: Importance.EXTREME, isDone: false, title: 'First todo',
    },
    {
      id: -2, importance: Importance.MEDIUM, isDone: false, title: 'Second todo',
    }],
  },
  mutations: {
    setTodos(state, newTodos) {
      state.todos = newTodos;
    },
  },
});
