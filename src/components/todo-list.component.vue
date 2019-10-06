<template>
  <div class="todo-list" v-if="todos.length > 0">
    <todo-item v-for="todo in todos"
               :key="todo.id"
               :todo="todo"
                @click.native="toggleTodo(todo.id)"/>
  </div>
  <h2 v-else>You've done everything. Add new todo by clicking plus button</h2>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import TodoItem           from '@/components/todo-item.component.vue';
import { ITodo }          from '@/types/types';

const storeModule = namespace('todoStore');

@Component({
  components: {
    TodoItem,
  },
})

export default class TodoList extends Vue {
  @storeModule.State todos!: Array<ITodo>;
  @storeModule.Mutation toggleTodo!: (id: number) => void;
}
</script>

<style scoped lang="scss">

.todo-list {
  width: 100%;
}

</style>
