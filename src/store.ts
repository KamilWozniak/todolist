import Vuex           from 'vuex';
import Vue            from 'vue';
import TodoAppStore   from '@/views/todo-app/todo-app.store';
import DoneTasksStore from '@/views/done-tasks/done-tasks.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // todoStore: TodoAppStore,
    // doneTasksStore: DoneTasksStore,
  },
});
