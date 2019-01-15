var test = require('tape');
var logic = require('./logic');


test('Testing 2: AddToDo Function', function(t) {
  let actual = logic.addTodo([],  'Forth One');
  let expected = [{description: 'Forth One', id: 1, done: false}];
  t.deepEqual(actual, expected, 'The Item has added');
  actual = logic.addTodo([{description: 'Forth One', id: 1, done: false}], 'Forth One');
  expected = [{description: 'Forth One', id: 1, done: false},{description: 'Forth One', id: 2, done: false}];
 console.log(actual);
  t.deepEqual(actual,expected,'The Item has added');
  t.end();  
});


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



