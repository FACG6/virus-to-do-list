// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      id: -3,
      description: 'first todo'
    },
    {
      id: -2,
      description: 'second todo'
    },
    {
      id: -1,
      description: 'third todo'
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    todoNode.classList.add('list_item');
    // you will need to use addEventListener

    //Adding style to completed list

    // add span holding description
    const span = document.createElement('span');
    span.classList.add('todo_title');
    span.textContent = todo.description;
    todoNode.appendChild(span);

    if (todo.done === true) {
      span.classList.add("mark");
      todoNode.classList.add("marked_node");
    }
    else{
      span.classList.remove("mark");
      todoNode.classList.remove("marked_node");
    }

    // this adds the delete button
    var deleteButtonNode = document.createElement('i');
    deleteButtonNode.classList.add('fas', 'fa-trash-alt')
    deleteButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    
    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      let description = document.querySelector('input[type="text"]').value;
      console.log(description);
      console.log(typeof description);
      // event.target ....
      if (!description.trim()) {
        alert("No spaces allowed");
      }
      // hint: todoFunctions.addTodo
     else{let newState = todoFunctions.addTodo(state, description);
      console.log(newState);
      // ?? change this!
      update(newState);
     }
    });
  
  }

  // you should not need to change this function
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();