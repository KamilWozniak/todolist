<template>
  <div class="todo-item">
    <h3>{{todo.title}}</h3>
    <p>{{todo.description}}</p>
    <button @click="deleteTodo">delete</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ITodo }                from '@/types/types';

@Component({})

export default class TodoItem extends Vue {
  @Prop() todo!: ITodo;

  deleteTodo():void {
    this.$store.commit('deleteTodo', this.todo.id);
  }
}
</script>

<style scoped lang="scss">
.todo-item {
  border: 1px solid black;
  width: 100%;
}
</style>
