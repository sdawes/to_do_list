function ToDoList() {
  this.list = [];
}

function ToDo(task) {
  this.task = task;
  this.complete = false;
}

ToDoList.prototype.add = function(task) {
  this.list.push(task);
};

ToDo.prototype.complete = function() {
  this.complete = true;
};

var task1 = new ToDo("Go to the shops and get some milk");

module.exports = ToDo;
module.exports = ToDoList;
