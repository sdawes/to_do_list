var ul = document.getElementById('list')
var removeAll = document.getElementById('removeAll')
var add = document.getElementById('add');

function addLi(targetUl) {
  var inputText = document.getElementById('text').value // Grab the input text (the new task)
  var li = document.createElement('li') // Create a new list item to put inside the ul
  var textNode = document.createTextNode(inputText + ' ') // Create a new textnode and give it the 'task' text

  li.appendChild(textNode); // Add the textnode to the created li
  targetUl.appendChild(li); // Add the constructed li to the ul.
}

add.onclick = function () {
  addLi(ul);
};
