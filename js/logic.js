// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
const todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function () {
    let idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }
    return incrementCounter;
  })(), //cloneArrayOfObjects will create a copy of the todos array 
  //changes to the new array don't affect the original
  addTodo: function (todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    const id = this.generateId();
    const newTodos = todos.concat({
      description: newTodo,
      id,
      done: false
    });
    return newTodos;
  },
  deleteTodo: function (todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    
    let newTodos = todos.filter(item => item.id !== idToDelete);
    
    return newTodos;
  },
  markTodo: function (todos, idToMark) {
    const copy_todos = [...todos];
    return copy_todos.map(element => {
      if (element.id === idToMark) {
        element.done = !element.done;
      }
      return element;
    });
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function (todos, sortFunction) {
    const newArray = [...todos];
    let sorted = newArray.sort(sortFunction);
    return sorted;
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
}

;
// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}