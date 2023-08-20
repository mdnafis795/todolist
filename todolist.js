const todolist = document.getElementById("to-do-list");
const tasklist = document.getElementById("tasklist");
const submit = document.getElementById("submit");


function fun() {
  if (todolist.value == "") {
    alert("Please Enter task");
  } else {
    const newele = document.createElement("li");
    newele.innerHTML = todolist.value;
    tasklist.appendChild(newele);
    todolist.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    newele.appendChild(span);
  }
  saveData();
}
submit.addEventListener('click', fun);

tasklist.addEventListener('click',function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data", tasklist.innerHTML);
}
function showtask(){
  tasklist.innerHTML = localStorage.getItem("data");
}
showtask();