<template>
  <div class="todo-list"
       v-if="todos.length > 0">

    <todo-item v-for="todo in todos"
               :key="todo.id"
               :todo="todo"
                @click.native="toggleTodo(todo.id)"/>
  </div>
  <h2 v-else class="todo-list__message">
    You've done everything.
    <br>
    Add new todo by clicking plus button
  </h2>
</template>

<script lang="ts">
import { Component, Vue }   from 'vue-property-decorator';
import { namespace, State } from 'vuex-class';
import TodoItem             from '@/views/todo-app/components/todo-item.component.vue';
import { ITodo }            from '@/interfaces/todo-app.interface';

const LOCAL = 'todoStore';
const local = namespace(LOCAL);

@Component({
  components: {
    TodoItem,
  },
})

export default class TodoList extends Vue {
  @State private todos!: Array<ITodo>;
  @local.Action private toggleTodo!: (id: number) => void;
}
</script>

<style scoped lang="scss">

.todo-list {
  width: $app-width;
  padding: 1rem;

  &__message {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
  }
}

</style>
