<template>
  <div class="todo-input">
    <form @submit.prevent="addNewTodo()"
          class="todo-input__form">

      <input placeholder="Add todo here..."
             v-model="newTodo"
             class="todo-input__form__input">

      <importance-selector class="todo-input__form__selector"/>
      <button type="submit"
              class="todo-input__form__add-btn">

        <img src="../assets/img/plus.png"
             alt="add todo"
             class="todo-input__form__add-btn__image">

      </button>
    </form>
    <img src="../assets/img/error.png"
         alt="close"
         class="todo-input__close-btn"
         @click="toggleInputVisibility">

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
  width: $app-width;
  position: relative;
  display: flex;
  justify-content: center;

  &__form {
    display: flex;
    padding: 1rem 1rem 4rem 1rem;
    flex-wrap: wrap;

    &__input {
      height: 3rem;
      margin-right: 2rem;
      border: none;
      border-bottom: 1px solid $black;

      &:focus {
        outline: none;
      }
    }

    &__selector {
      align-self: center
    }

    &__add-btn {
      position: absolute;
      border-radius: 5px;
      border: none;
      text-transform: uppercase;
      background-color: transparent;
      bottom: -3rem;
      left: 12rem;

      &:focus {
        outline: none;
      }

      &__image {
        width: 5rem;
        height: auto;
        cursor: pointer;
      }
    }
  }

  &__close-btn {
    width: 5rem;
    height: auto;
    cursor: pointer;
    position: absolute;
    bottom: -2.5rem;
    right: 12rem;
  }
}

</style>
