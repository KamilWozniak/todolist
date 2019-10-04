<template>
  <div class="todo-app">
    <div class="todo-app__list-wrapper"
         :class="{'todo-app__list-wrapper--sharp-bottom-corners'
         : this.$store.state.isInputVisible}">
      {{this.isInputVisible ? 'test1': 'test2'}}
      <todo-list />
<!--      <img v-show="!this.$store.state.isInputVisible"-->
<!--           @click="toggleInputVisibility"-->
<!--           class="add-todo-btn"-->
<!--           src="../../assets/img/plus.png"-->
<!--            alt="">-->

    </div>
<!--    <todo-input v-show="this.$store.state.isInputVisible"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue }             from 'vue-property-decorator';
import { Mutation, namespace } from 'vuex-class';
import TodoInput                      from '@/components/todo-input.component.vue';
import TodoList                       from '@/components/todo-list.component.vue';

const module = namespace('myModule12332');

@Component({
  components: {
    TodoInput,
    TodoList,
  },
})
export default class TodoApp extends Vue {
  @module.State('isInputVisible') isInputVisible!: boolean;
  @Mutation toggleInputVisibility!: void
}

</script>

<style scoped lang="scss">

.todo-app {
  background-color: $grey-100;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__list-wrapper {
    width: 40rem;
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    justify-content: start;
    background-color: $white;
    align-items: center;
    border-radius: 1rem 1rem 1rem 1rem;
    padding-top: 3rem;
    position: relative;

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
