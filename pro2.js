const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

   function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please type a task!");
    return;
  }


  const li = document.createElement("li");
  li.textContent = taskText;
 


  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
