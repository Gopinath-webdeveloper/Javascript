let Add = document.querySelector(".add");
let Result = document.querySelector(".result");
let input = document.querySelector(".in");

// local storage
let todolist = [];

window.onload = () => {
  console.log("window loaded");

  todolist = JSON.parse(localStorage.getItem("todolistkey")) || [];
  console.log(todolist);
  todolist.forEach((todos) => addTodolist(todos));
};

Add.addEventListener("click", function () {
  todolist.push(input.value);
  // console.log(todolist);

  // local storage
  // conveting array to string for saving to local storage

  // That's the main reason why you have to stringify your object: That way it's turned into text that can "travel" over HTTP. When sending data to a web server, the data has to be a string.
  // That's why we are using JSON.
  localStorage.setItem("todolistkey", JSON.stringify(todolist));

  addTodolist(input.value);
  input.value = "";
});

function addTodolist(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  Result.appendChild(para);

  para.addEventListener("click", function () {
    // para.style.textDecoration = "line-through";
    remove(todo);
    Result.removeChild(para);
  });

  para.addEventListener("dblclick", function () {
    remove(todo);
  });
}

function remove(todo) {
  let index = todolist.indexOf(todo);
  if (index > -1) {
    todolist.splice(index, 1);
  }
  //updated local storage
  localStorage.setItem("todolistkey", JSON.stringify(todolist));
}
