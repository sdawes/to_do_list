var expect = require('chai').expect
var assert = require('chai').assert
// var assert = chai.assert;
// var expect = chai.expect;
var ToDo = require('../src/toDo.js');
var ToDoList = require('../src/toDo.js');

describe("instantiate a todo", function() {
  it('creates an instance of ToDo', function(){
    var task = new ToDo();
    expect(task).to.be.an.instanceof(ToDo);
  });
});


describe("can add and retreive tasks in an array", function() {
  it('adds a task to an array', function(){
    var task = new ToDo();
    task.add("Wash the bike");
    expect(task.list).to.include('Wash the bike')
  });
});
