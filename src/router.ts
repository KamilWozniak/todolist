import Vue       from 'vue';
import Router    from 'vue-router';
import TodoApp   from './views/todo-app/todo-app.view.vue';
import DoneTasks from './views/done-tasks/done-tasks.view.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: TodoApp,
    },
    {
      path: '/done',
      name: 'doneTasks',
      component: DoneTasks,
    },
  ],
});
