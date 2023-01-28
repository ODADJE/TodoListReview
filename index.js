let compteur = 0;
let numberCheck = 0;
let j = 0;
let tab = [];
let newTab = [];
const addTask = () => {
  const newTask = document.querySelector(".new-task");
  if (newTask.value == "") {
    alert("Please write something");
    return;
  }
  compteur++;
  document.querySelector(".total").innerText = compteur;
  tab.push(compteur);

  const divTask = document.createElement("Div");
  divTask.id = `div${compteur}`;
  divTask.className = `task-1`;
  document.querySelector(".task-list").appendChild(divTask);

  const task = document.createElement("P");
  task.innerText = newTask.value;
  task.id = `p${compteur}`;

  /*  task.setAttribute("class","editTask")
  task.setAttribute("onclick","editMyTask()") */

  const taskCheck = document.createElement("Input");
  taskCheck.id = `${compteur}`;
  taskCheck.className = `checkbox`;
  taskCheck.type = `checkbox`;
  taskCheck.setAttribute("onchange", "checkedTask()");

  const deleteTheTask = document.createElement("Img");
  //deleteTheTask.id = `${compteur}`;
  deleteTheTask.src = `assets/images/trash.png`;

  taskCheck.setAttribute("onchange", "checkedTask()");

  document.querySelector(`#div${compteur}`).appendChild(taskCheck);
  document.querySelector(`#div${compteur}`).appendChild(task);
  document.querySelector(`#div${compteur}`).appendChild(deleteTheTask);

  newTask.value = "";
};

const deleteTask = () => {
  for (let index = 0; index < tab.length; index++) {
    let check = document.getElementById(`${tab[index]}`);
    if (check.checked === true) {
      const taskFinish = document.getElementById(`div${tab[index]}`);
      taskFinish.remove();
      //tab.remove(tab[index]);
    } else {
      newTab[j] = tab[index];
      j++;
    }
  }
  j = 0;
  tab.length = 0;
  for (let index = 0; index < newTab.length; index++) {
    tab[index] = newTab[index];
  }
  newTab.length = 0;
  if (tab.length == 0) {
    const message = document.createElement("P");
    message.innerText = "Empty";
    message.id = `p`;
    document.querySelector(`.tasks`).appendChild(message);
    message.style.textAlign = "center";
    message.style.fontSize = "20px";
    message.style.color = "blue";
    document.querySelector(".deleteTask").disabled = true;
    test = 1;
  }
};

const checkedTask = () => {
  // for (let index = 0; index < tab.length; index++) {
  let check = document.getElementById("2");
  if (check.checked === true) {
    const taskChecked = document.getElementById(`p2`);
    taskChecked.style.textDecoration = "line-through";
    numberCheck++;
    //tab.remove(tab[index]);
  } else {
    const taskChecked = document.getElementById(`p${tab[index]}`);
    taskChecked.style.textDecoration = "none";
    numberCheck--;
  }
};
//};
/* document.querySelector(".tasks").addEventListener("click",editMyTask)
  const editMyTask = (e) =>{
   console.log(e.target);

      
    
  } */
