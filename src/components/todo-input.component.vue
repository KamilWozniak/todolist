<template>
  <form @submit.prevent="addNewTodo()">
    <input placeholder="Add todo here..." v-model="newTodo">
    <button type="submit">Add todo</button>
    <p @click="toggleInput">close</p>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})

export default class TodoInput extends Vue {
  newTodo: string ='';

  addNewTodo():void {
    // this.$store.commit('addTodo', this.newTodo);
    this.newTodo = '';
  }

  toggleInput(): void {
    this.$store.commit('toggleInputVisibility');
  }
}


</script>

<style scoped>

</style>
