<template>
  <div class="todo-item">
    <h3>{{todo.title}}</h3>
    <p>{{todo.importance === 0 ? 'normal': ''}}</p>
    <p>{{todo.importance === 1 ? 'medium': ''}}</p>
    <p>{{todo.importance === 2 ? 'high': ''}}</p>
    <p>{{todo.importance === 3 ? 'extreme': ''}}</p>
    {{todo.isDone ? 'done': 'not done'}}
    <button @click="deleteTodo(todo.id)">delete</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace }            from 'vuex-class';
import { ITodo }                from '@/types/types';

const storeModule = namespace('todoStore');

@Component({})

export default class TodoItem extends Vue {
  @Prop() todo!: ITodo;
  @storeModule.Mutation deleteTodo!: (id: any) => void;
}
</script>

<style scoped lang="scss">
.todo-item {
  border: 1px solid black;
  width: 100%;
}
</style>
