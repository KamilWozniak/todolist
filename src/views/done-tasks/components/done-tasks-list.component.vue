<template>
  <div class="done-list"
       v-if="doneTodos.length > 0">

    <done-item v-for="item in doneTodos"
               :key="item.id"
               :doneItem="item"/>
  </div>
  <h2 v-else class="done-list__message">
    You've done everything.
    <br>
    Add new todo by clicking plus button
  </h2>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace }      from 'vuex-class';
import DoneItem           from './done-item.component.vue';
import { ITodo }          from '@/views/todo-app/todo-app.interface';


const local = namespace('doneTasksStore');

@Component({
  components: {
    DoneItem,
  },
})

export default class TodoList extends Vue {
  @local.State doneTodos!: Array<ITodo>;
}
</script>

<style scoped lang="scss">

.done-list {
  width: $app-width;
  padding: 1rem;

  &__message {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
  }
}

</style>
