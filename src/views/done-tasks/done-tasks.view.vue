<template>
  <div class="done-tasks__wrapper">
    <div class="done-tasks">
      <div class="done-tasks__list-wrapper">
        <RouterLink to="/" >All todos</RouterLink>
        <done-tasks-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DoneTasksList      from './components/done-tasks-list.component.vue';
import store         from '@/store';
import myModule from './done-tasks.store';

@Component({
  components: {
    DoneTasksList,
  },
  beforeRouteLeave(to, from, next) {
    alert('wyrejestrowuje doneTasksStore');
    // store.registerModule('doneTasksStore', myModule);
    // store.unregisterModule('doneTasksStore');
    store.unregisterModule('doneTasksStore');
    next();
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.doneTasksStore === undefined) {
      alert('rejestruje doneTaskStore');
      store.registerModule('doneTasksStore', myModule);
    }
    next();
  },
})
export default class DoneTasks extends Vue {
}


</script>

<style scoped lang="scss">

.done-tasks {
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
  }

}


</style>
