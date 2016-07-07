window.onload = function() {

	var list = new List();

	var updateList = function(){
		document.getElementById('list-printed').innerHTML = printItems(list.list);
	};

	document.getElementById('submit').addEventListener('click', addTask, false);

	function addTask(evt){
		evt.preventDefault();
		list.addItem(document.getElementById('task-input').value);
		updateList()
		document.getElementById('form').reset();
		addCheckBoxListener();
	};

	// for (var i = 0; i < list.list.length; i++) {

		// result.addEventListener('click', tickCheckBox(), false);
	// }

	function addCheckBoxListener(){
		document.getElementById('tickbox').addEventListener('click', tickCheckBox, false);
	};

	function tickCheckBox(){
		list.list[0].changeStatus();
		updateList();
	};



};
