let compteur = 1;

const addTask = () => {
   compteur++;
   
  console.log("test1");
  const divTask = document.createElement("p");
  //divTask.id = `task-${compteur}`;
  //divTask.className = `tasks-name`;
  divTask.innerHTML = "hello dude"
  document.querySelector("header").appendChild(divTask);
  console.log("test2");
  console.log(divTask);

  
  
};