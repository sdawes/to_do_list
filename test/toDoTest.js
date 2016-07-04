var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js');

describe('create a toDo', function() {
  describe('instantiation', function () {
    it('should instantiate a toDo object', function () {
      var toDo = new ToDo();
      expect(toDo).to.be.an.instanceof(ToDo);
    });
  });

  describe('store and retrieve task string', function () {
    it('should store a task string', function () {
      var toDo = new ToDo();
      toDo.add("Buy some milk");
      
    });
  });
});
