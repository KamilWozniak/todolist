<template>
  <div class="todo-app__wrapper">
    <div class="todo-app">
      <div class="todo-app__list-wrapper"
           :class="{'todo-app__list-wrapper--sharp-bottom-corners'
           : isInputVisible}">
        <RouterLink to="/done">Done Tasks</RouterLink>
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
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import TodoInput          from '@/views/todo-app/components/todo-input.component.vue';
import TodoList           from '@/views/todo-app/components/todo-list.component.vue';
import store              from '../../store';
import todoStore          from './todo-app.store';

const storeModule = namespace('todoStore');

@Component({
  components: {
    TodoInput,
    TodoList,
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.todoStore === undefined) {
      alert('rejestruje todoStore!');
      store.registerModule('todoStore', todoStore);
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    // if (this.$store.state.doneTodosState !== undefined) {
    //   alert('wyrejestrowuje doneTodosStore');
    //   store.unregisterModule('doneTodosStore');
    // }
    // store.unregisterModule('doneTodosStore');
    // store.registerModule('todoStore', todoStore);
    // alert('wyrejestrowuje todoStore');
    // store.unregisterModule('todoStore');

    next();
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
    padding-top: 3rem;

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
