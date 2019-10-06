import { Importance } from '@/types/types';
<template>
  <div class="todo-input">
    <form @submit.prevent="addNewTodo()">
      <input placeholder="Add todo here..." v-model="newTodo">
      <importance-selector />
      <button type="submit">Add todo</button>
    </form>
    <img src="../assets/img/error.png"
         alt="close" class="todo-input__close-btn" @click="toggleInputVisibility">
  </div>
</template>

<script lang="ts">
import { Component, Vue }               from 'vue-property-decorator';
import { Mutation, namespace, State }   from 'vuex-class';
import { Importance, ITaskDescription } from '@/types/types';
import ImportanceSelector               from '@/components/importance-selector.component.vue';

const storeModule = namespace('todoStore');

@Component({
  components: {
    ImportanceSelector,
  },
})
export default class TodoInput extends Vue {
  newTodo: string ='';
  @State('selectedImportance', { namespace: 'todoStore' }) importance!: Importance;
  @storeModule.Mutation toggleInputVisibility!: () => void;
  @Mutation('addTodo', { namespace: 'todoStore' }) addTodo!: (taskDescription: ITaskDescription) => void;
  @Mutation('setTaskImportance', { namespace: 'todoStore' }) setImportance!: (importance: Importance) => void;

  addNewTodo():void {
    if (this.newTodo.length > 2) {
      this.addTodo({ title: this.newTodo.trim(), importance: this.importance });
      this.newTodo = '';
      this.setImportance(Importance.NORMAL);
      this.toggleInputVisibility();
    }
  }
}


</script>

<style scoped lang="scss">

.todo-input {
  background-color: $white;
  border-radius: 0 0 1rem 1rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &__close-btn {
    width: 5rem;
    height: auto;
    cursor: pointer;
    position: absolute;
    bottom: -2.5rem;
  }
}

</style>
