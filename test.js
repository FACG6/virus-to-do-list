var test = require('tape');
var logic = require('./logic');

test('Testing 1: MarkToDo Function', function (t) {
const actualValue = logic.markTodo([{
  id: 0,
  description: "visiting amy ",
  done:true
}, {
  id: 1,
  description: "go to sleep ",
  done :false
}], 1);
const expectedValue = [{
    id: 0,
    description: "visiting amy ",
    done: true
  }, {
    id: 1,
    description: "go to sleep ",
    done: true
  }]
  ;
  t.deepEqual(actualValue, expectedValue, "Object with id 1 should have done value true");

  t.end();
});

test('Testing 2: MarkToDo Function', function (t) {
  const actualValue = logic.markTodo([{
    id: 0,
    description: "visiting My grandpa",
    done: true
  }, {
    id: 1,
    description: "calling my friend",
    done: true
  }], 0);

  const expectedValue = [{
    id: 0,
    description: "visiting My grandpa",
    done: false
  }, {
    id: 1,
    description: "calling my friend",
    done: true
  }]
    ;
  t.deepEqual(actualValue, expectedValue, "Object with id 1 should have done value false");
  t.end();
});
test('Testing: Function sortTodos', function(t) {
  const actualValue = logic.sortTodos([{id: 0, description: "Visiting doctor", done: true}, {description: "Doing my homework", done: false}])
  const expectedValue = [ { id: 0, description: 'Visiting doctor', done: true }, { description: 'Doing my homework', done: false } ]
  t.deepEqual(actualValue, expectedValue, "Object with true value first then Object with false value")
  t.end();
});
test('Testing: Function sortTodos', function(t) {
  const actualValue = logic.sortTodos([{id: 0, description: "Visiting doctor", done: false}, {description: "Doing my homework", done: true}])
  const expectedValue = [ {description: "Doing my homework", done: true}, {id: 0, description: "Visiting doctor", done: false} ]
  t.deepEqual(actualValue, expectedValue, "Object with true value first then Object with false value")
  t.end();
});


