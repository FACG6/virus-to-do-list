var test = require('tape');
var logic = require('./logic');

test('', function(t) {
  const actual = logic.addTodo([
    {id: 0, description: 'First One', done: false},
    {id: 1, description: 'Second One', done: false},
    {id: 2, description: 'Third One', done: false}
  ], {id: 3, description: 'Forth One', done: false});
  const expected = [
    {id: 0, description: 'First One', done: false},
    {id: 1, description: 'Second One', done: false},
    {id: 2, description: 'Third One', done: false},
    {id: 3, description: 'Forth One', done: false}
  ];
  t.deepEqual(actual, expected, 'The Item has added');
  t.end();  
});

test('', function(t) {
  const actual = logic.addTodo([], {id: 3, description: 'Forth One', done: false});
  const expected = [{id: 3, description: 'Forth One', done: false}
  ];
  t.deepEqual(actual, expected, 'The Item has added');
  t.end();  
});

test('', function(t) {
  const actual = logic.addTodo([
    {id: 0, description: 'First One', done: false},
    {id: 2, description: 'Third One', done: false}
  ], {id: 2, description: 'Third One', done: false});
  const expected = [
    {id: 0, description: 'First One', done: false},
    {id: 2, description: 'Third One', done: false}
  ];
  t.deepEqual(actual, expected, 'This Todo is already exist');
  t.end();  
});