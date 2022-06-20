// add task
document.getElementById("push").onclick = function () {
  let elInput = document.getElementById("to-do-input").value;
  // console.log(elInput.length);
  if (elInput == "") {
    alert("Ajoute une tache");
  } else if (elInput.length < 3) {
    alert("La tache est trop courte !");
  } else if (elInput.length > 35) {
    alert("La tache est trop longue !");
  } else {
    console.log("Tout est ok pour envoyer !");
    document.querySelector("#tasks").innerHTML += `
    <div class="d-flex justify-content-between align-items-center py-3 mb-3 border-bottom">
    <span  class="my-0 taskname">${elInput}</span>
    <button class="btn btn-danger delete">Delete</button>   
    </div>
    `;
    // delete task
    let tasksDelete = document.querySelectorAll(".delete");
    console.log("tasksDelete : ", tasksDelete);
    for (let i = 0; i < tasksDelete.length; i++) {
      tasksDelete[i].onclick = function () {
        console.log("click");
        this.parentNode.remove();
      };
    }
    // task done
    let tasksDone = document.querySelectorAll(".taskname");
    for (let i = 0; i < tasksDone.length; i++) {
      tasksDone[i].onclick = function () {
        console.log("Task Done");
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#to-do-input").value = "";
  }
};
