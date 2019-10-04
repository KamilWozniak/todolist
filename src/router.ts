import Vue     from 'vue';
import Router  from 'vue-router';
import TodoApp from './views/todo-app/todo-app.view.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: TodoApp,
    },
  ],
});
