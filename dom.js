// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [{
      id: -3,
      description: 'first todo',
      done: false
    },
    {
      id: -2,
      description: 'second todo',
      done: false
    },
    {
      id: -1,
      description: 'third todo',
      done: false
    },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    todoNode.classList.add('list_item');
    // you will need to use addEventListener
    // add span holding description
    const span = document.createElement('span');
    span.classList.add('todo_title');
    span.textContent = todo.description;
    todoNode.appendChild(span);

    //Adding style to completed list

    if (todo.done === true) {
      span.classList.add("mark");
      todoNode.classList.add("marked_node");
    } else {
      span.classList.remove("mark");
      todoNode.classList.remove("marked_node");
    }

    // this adds the delete button
    var deleteButtonNode = document.createElement('i');
    deleteButtonNode.classList.add('fas', 'fa-trash-alt')
      deleteButtonNode.addEventListener('click', function (event) {
        if(confirm){
          alert("Are you sure you want to delete it?")
        }
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    var markButtonNode = document.createElement('i');
    markButtonNode.classList.add("fas", "fa-check");
    markButtonNode.addEventListener('click', function (event) {
      let marked = todoFunctions.markTodo(state, todo.id);
      let newState = todoFunctions.sortTodos(marked, arrange);
      console.log(marked, newState);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);
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
      // event.target ....
      if (!description.trim()) {
        alert("No spaces allowed");
      }
      // hint: todoFunctions.addTodo
      else {
        let newState = todoFunctions.addTodo(state, description);
        console.log(newState);
        // ?? change this!
        update(newState);
      }
    });

  }

  // Create Arrange Function 

  var arrange = function(a,b){
    return a.done - b.done;
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