<template>
  <div class="todo-app__wrapper">
    <div class="todo-app">
      <div class="todo-app__list-wrapper"
           :class="{'todo-app__list-wrapper--sharp-bottom-corners'
           : isInputVisible}">

        <todo-list />
        <img v-show="!isInputVisible"
             @click="toggleInputVisibility"
             class="add-todo-btn"
             src="../../assets/img/plus.png"
             alt="add todo">

      </div>
      <todo-input v-show="isInputVisible"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue }             from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import TodoInput                      from '@/components/todo-input.component.vue';
import TodoList                       from '@/components/todo-list.component.vue';

const storeModule = namespace('todoStore');

@Component({
  components: {
    TodoInput,
    TodoList,
  },
})
export default class TodoApp extends Vue {
  @storeModule.State('isInputVisible') isInputVisible!: boolean;
  @storeModule.Mutation toggleInputVisibility!: () => void;
}

</script>

<style scoped lang="scss">

.todo-app {
  &__wrapper {
    background-color: $grey-100;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__list-wrapper {
    width: $app-width;
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    justify-content: start;
    background-color: $white;
    align-items: center;
    border-radius: 1rem 1rem 1rem 1rem;
    position: relative;
    padding: 4rem 2rem 2rem 2rem;

    &--sharp-bottom-corners {
      border-radius: 1rem 1rem 0 0;

    }
  }

  .add-todo-btn {
    width: 5rem;
    height: auto;
    cursor: pointer;
    position: absolute;
    bottom: -2.5rem;
  }
}


</style>
