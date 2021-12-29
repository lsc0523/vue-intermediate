<template>
  <div id="app">

    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>

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
    // addOneItem(Item){
    //   const obj = {completed: false, item: Item};
    //   localStorage.setItem(Item,JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // deleteOneItem(todoItem,index){
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1)
    // },
    // toggleOneItem(todoItem,index){
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAll(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  created(){

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
