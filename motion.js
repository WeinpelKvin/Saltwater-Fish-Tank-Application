window.onload = function() {
	//variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");	
	var btnClr = document.getElementById("btnClr");	
	var id = 1;
	
	// listItem = {item: "todo item", checked: flase}
	var liItem = "";
	var todoList = [];

	//button event listener
	btn.addEventListener("click", addTodoItem);

	//list event listener
	list.addEventListener("click", boxChecked);

	//event listener for clear list
	btnClr.addEventListener("click", clearList);

	if(localStorage.length <= 0) {
		console.log("button");
	}

	//checking localstorage has data
	if(localStorage.length > 0) {
		displayList();
	}

	//add todo item to list
	function addTodoItem() {
		if(input.value === "") {
			alert("You must enter some value!");
		}
		else {
			if(list.style.borderTop === "") {
				console.log("here!")
				list.style.borderTop = "2px solid white";
				btnClr.style.display = "inline";
			}
			var text = input.value;	
			var item = `<li id="li-${id}" class="listBox">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;				
			list.insertAdjacentHTML('beforeend', item);	
			liItem = {item: text, checked: false};
			todoList.push(liItem);		
			id++;
			addToLocalStorage()
			form.reset();
		}
	}

	//adding string through style to list itme
	function boxChecked(event) {
		const element = event.target;
		if(element.type === "checkbox") {
			element.parentNode.style.textDecoration = "line-through";
			todoList = JSON.parse(localStorage.getItem("todoList"));
			todoList[element.id.split('-')[1]-1].checked = element.checked.toString();
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
	}

	//display all todo list
	function displayList() {
		list.style.borderTop = "2px solid white";
		todoList = JSON.parse(localStorage.getItem("todoList"));
		todoList.forEach(function(element) {
			var text = element.item;
			var item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
			list.insertAdjacentHTML("beforeend", item);
			//if we got a checked box, then style
			if(element.checked) {
				var li = document.getElementById("li-"+id);
				li.style.textDecoration = "line-through";
				li.childNodes[1].checked = element.checked;
			}
			id++;
		});
	}
	//clear list event listener
	function clearList() {
		todoList = [];
		localStorage.clear();
		list.innerHTML = "";
		btnClr.style.display = "none";
		list.style.borderTop = "";
	}

$("[data-toggle=popover]")
	.popover({html:true})
}

// Log Tables
function tempTable(){
	$('#logNumbers').empty();
	document.getElementById('tableTitle').innerHTML = "Temperature";
	var appendEl = $('<div class="row text-center" style="margin-left: 5px; font-size: 20px; line-height: 0px;"></div>').appendTo('#logNumbers');
	$('<div class="col-2"><p>78<sup><span>&#9900;</span></sup></p></div><div class="col-2"><p>75<sup><span>&#9900;</span></sup></p></div><div class="col-2"><p>79<sup><span>&#9900;</span></sup></p></div><div class="col-2"><p>77<sup><span>&#9900;</span></sup></p></div>').appendTo(appendEl);
}

function pHTable(){
	$('#logNumbers').empty();
	document.getElementById('tableTitle').innerHTML = "pH";
	var appendEl = $('<div class="row text-center" style="margin-left: 5px; font-size: 20px; line-height: 0px;"></div>').appendTo('#logNumbers');
	$('<div class="col-2"><p>8.1</p></div><div class="col-2"><p>8.2</p></div><div class="col-2"><p>8.4</p></div><div class="col-2"><p>8.2</p></div>').appendTo(appendEl);
}

function humidTable(){
	$('#logNumbers').empty();
	document.getElementById('tableTitle').innerHTML = "Humidity";
	var appendEl = $('<div class="row text-center" style="margin-left: 5px; font-size: 20px; line-height: 0px;"></div>').appendTo('#logNumbers');
	$('<div class="col-2"><p>45<span style="font-size:20px">%</span></p></div><div class="col-2"><p>49<span style="font-size:20px">%</span></p></div><div class="col-2"><p>47<span style="font-size:20px">%</span></p></div><div class="col-2"><p>45<span style="font-size:20px">%</span></p></div>').appendTo(appendEl);
}
