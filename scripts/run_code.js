var ToDo = require('../lib/modules/toDo.js');
var ToDoList = require('../lib/modules/toDoList.js');


var new_list = new ToDoList();
var task1 = new ToDo("Fix the bike");
var task2 = new ToDo("Buy some milk");
var task3 = new ToDo("This should be popped");
new_list.add(task1);
new_list.add(task2);
new_list.add(task3);
result = new_task.popTask();

console.log(new_list.array);
console.log(new_list.popTask());
console.log("OMG");
console.log(new_list.list);

// node node_modules/http-server/bin/http-server
