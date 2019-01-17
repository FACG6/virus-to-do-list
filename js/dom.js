// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  const container = document.getElementById('todo-container');
  const addTodoForm = document.getElementById('add-todo');

  let state = []; // this is our initial todoList

  
  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = function (todo) {
    const todoNode = document.createElement('li');
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
    const deleteButtonNode = document.createElement('i');
    deleteButtonNode.classList.add('fas', 'fa-trash-alt', 'deleteicon')
    deleteButtonNode.addEventListener('click', function (event) {
      if (confirm('Are you sure?')) {
        const newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      }

    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    const markButtonNode = document.createElement('i');
    markButtonNode.classList.add("fas", "fa-check", 'check_icon');
    markButtonNode.addEventListener('click', function (event) {
      const marked = todoFunctions.markTodo(state, todo.id);
      const newState = todoFunctions.sortTodos(marked, arrange);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      const description = document.querySelector('input[type="text"]').value;

      // Testing: if the user enters anything that does not include at least one letter, 
      // it won't be accepted, for example "123455", "/-*%$", ".", or ""
      // Yet, for example, values such as "hello 456", "kata 12", "hello -5/6%" are all accepted

      if (!/[A-Z-a-z]/.test(description)){  
        alert("Not allowed. Please Enter a word");
      }
      // hint: todoFunctions.addTodo
      else {
        const newState = todoFunctions.addTodo(state, description);
        update(newState);
      }
    });

  }

  // Create Arrange Function 

  const arrange = function (value1, value2) {
    return value1.done - value2.done;
  }

  // you should not need to change this function
  const update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  const renderState = function (state) {
    const todoListNode = document.createElement('ul');
    todoListNode.classList.add("todolist");

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();