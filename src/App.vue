<template>
  <div id="app">

    <todo-header></todo-header>
    <todo-input v-on:addItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:deleteItem="deleteOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearAll="clearAll"></todo-footer>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data(){
    return{
      todoItems : []
    }
  },
  methods: {
    addOneItem(Item){
      const obj = {completed: false, item: Item};
      localStorage.setItem(Item,JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    deleteOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem,index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
    if (localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
