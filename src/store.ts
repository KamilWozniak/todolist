import Vuex         from 'vuex';
import Vue from 'vue';
import TodoAppStore from '@/views/todo-app/todo-app.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoStore: TodoAppStore,
  },
});
