var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('test delete to do function',function(t){   
  const actual = logic.deleteTodo([],1);
  const expected = [];
  t.deepEqual(actual, expected, 'to-do item has removed');
  t.end();
});
test('test delete to do function',function(t){   
  const actual = logic.deleteTodo([{ id: 0, description: 'b', done: false }, { id: 1, description: 'b', done: false }, { id: 2, description: 'b', done: false }],3);
  const expected = [{ id: 0, description: 'b', done: false }, { id: 1, description: 'b', done: false }, { id: 2, description: 'b', done: false }];
  t.deepEqual(actual, expected, 'to-do item has removed');
  t.end();
});
test('test delete to do function',function(t){   
  const actual = logic.deleteTodo([{ id: 0, description: 'b', done: false }],0);
  const expected = [];
  t.deepEqual(actual, expected, 'to-do item has removed');
  t.end();
});

test('test delete to do function',function(t){   
  const actual = logic.deleteTodo([{ id: 0, description: 'b', done: false }, { id: 1, description: 'b', done: false }, { id: 2, description: 'b', done: false }], 1);
  const expected = [{ id: 0, description: 'b', done: false }, { id: 2, description: 'b', done: false }];
  t.deepEqual(actual, expected, 'to-do item has removed');
  t.end();
});

