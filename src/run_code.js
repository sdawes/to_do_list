var ToDo = require('../src/toDo.js');
var ToDoList = require('../src/toDoList.js');


steveslist = new ToDoList();
task1 = new ToDo("Fix the bike");
task2 = new ToDo("Buy some milk");
task3 = new ToDo("This should be popped")
steveslist.add(task1);
steveslist.add(task2);
steveslist.add(task3);

console.log(steveslist.array);
console.log(steveslist.popTask());
