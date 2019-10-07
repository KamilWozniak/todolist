<template>
  <div class="done-item">
    <span class="done-item__importancy"
          :class="getBackground(doneItem.importance)"></span>

    <h3 class="done-item__title"
        :class="{'done-item__title--done' : doneItem.isDone}">

      {{doneItem.title}}
    </h3>
    <el-button type="danger"
               class="done-item__delete-btn"
               icon="el-icon-delete"
               size="mini"
               circle
               @click.stop="deleteTodo(doneItem.id)"></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace }            from 'vuex-class';
import { Importance, ITodo }    from '@/views/todo-app/todo-app.interface';

const local = namespace('doneTasksStore');

@Component

export default class TodoItem extends Vue {
  @Prop() doneItem!: ITodo;
  @local.Mutation deleteTodo!: (id: any) => void;

  getBackground: (importance: Importance) => string = (importance: Importance) => {
    if (importance === Importance.NORMAL) {
      return 'done-item__importancy--normal';
    }
    if (importance === Importance.MEDIUM) {
      return 'done-item__importancy--medium';
    }
    if (importance === Importance.HIGH) {
      return 'done-item__importancy--high';
    }
    return 'done-item__importancy--extreme';
  };
}
</script>

<style scoped lang="scss">
.done-item {
  display: flex;
  margin-bottom: 2rem;
  cursor: pointer;
  border-bottom: 1px $grey-400 solid;
  width: 32rem;
  position: relative;
  margin-left: 1rem;
  padding-bottom: 2px;

  &__title {
    font-size: 2rem;
    font-weight: normal;
    align-self: center;

    &--done {
      color: $grey-400;
      text-decoration: line-through;
    }
  }

  &__delete-btn {
    align-self: center;
    position: absolute;
    right: -4rem;
    top: -9px;

  }

  &__importancy {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 4rem;
    border: 1px $grey-400 solid;
    margin: 0 1rem;
    align-self: center;

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
  }
}
</style>
