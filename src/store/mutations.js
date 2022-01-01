const addOneItem = (state, Item) => {
    const obj = {completed: false, item: Item};
    localStorage.setItem(Item,JSON.stringify(obj));
    state.todoItems.push(obj);
}

const deleteOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1)
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAll = (state) => {
    state.todoItems = [];
}

export { addOneItem, deleteOneItem, toggleOneItem, clearAll }