// document.getElementById("push").onclick = function (e) {
//   console.log("e",e);
// };

document.getElementById("push").addEventListener("click", function () {
  let elInput = document.getElementById("to-do-input").value;
  console.log(elInput.length);
  if (elInput == "") {
    alert("Ajoute une tache");
  } else if (elInput.length < 3) {
    alert("La tache est trop courte !");
  } else if (elInput.length > 35) {
    alert("La tache est trop longue !");
  } else {
    console.log("Tout est ok pour envoyer !");
    document.querySelector("#tasks").innerHTML += `
    <div class="d-flex justify-content-between align-items-center mb-5">
    <span id="taskName" class="my-0">${elInput}</span>
    <button class="btn btn-danger">Delete</button>   
    </div>
    `;
  }
});

// let currentTasks = document.querySelectorAll(".delete");
// for (let index = 0; index < tasks.length; index++) {
//     tasks[index].onclick= function  {
        
//     }
//     const element = tasks[index];
    
// }