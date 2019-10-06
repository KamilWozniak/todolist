<template>
  <div class="selector">
    <span class="selector__item selector__item--normal"
          :class="{'selector__item--chosen': importance === 0}"
          @click="setImportance(0)"></span>

    <span class="selector__item selector__item--medium"
          :class="{'selector__item--chosen': importance === 1}"
          @click="setImportance(1)"></span>

    <span class="selector__item selector__item--high"
          :class="{'selector__item--chosen': importance === 2}"
          @click="setImportance(2)"></span>

    <span class="selector__item selector__item--extreme"
          :class="{'selector__item--chosen': importance === 3}"
          @click="setImportance(3)"></span>

  </div>
</template>

<script lang="ts">
import { Component, Vue }  from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { Importance }      from '@/types/types';

@Component
export default class ImportanceSelector extends Vue {
  @State('selectedImportance', { namespace: 'todoStore' }) importance!: Importance;
  @Mutation('setTaskImportance', { namespace: 'todoStore' }) setImportance!: (importance: Importance) => void
}
</script>

<style scoped lang="scss">

.selector {
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &__item {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 4rem;
    border: 1px black solid;
    margin: 0 1rem;
    cursor: pointer;

    &--normal {
      background-color: $white;
    }

    &--medium {
      background-color: #1C5D99;
    }

    &--high {
      background-color: darkorange;
    }

    &--extreme {
      background-color: red;
    }

    &--chosen {
      &::after {
        content: '';
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 4rem;
        margin-left: -4px;
        margin-top: -4px;
        border: 1px solid greenyellow;
      }
    }
  }

}

</style>
