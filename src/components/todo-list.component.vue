<template>
  <div class="todo-list">
    <todo-item v-for="todo in this.$store.state.todos"
               :key="todo.id"
               :todo="todo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem           from '@/components/todo-item.component.vue';

@Component({
  components: {
    TodoItem,
  },
})

export default class TodoList extends Vue {
}
</script>

<style scoped lang="scss">

.todo-list {
  width: 100%;
}

</style>
