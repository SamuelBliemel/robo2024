let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


let url = window.location.search;
let urlParams = new URLSearchParams(url);
let taskID = urlParams.get("id");
console.log(taskID);

let taskRegister = JSON.parse(localStorage.getItem("taskRegister"));
console.log(taskRegister);

let taskLogin = JSON.parse(localStorage.getItem("taskLogin"));
console.log(taskLogin);

let findUser = taskRegister.find(user => user.email == taskLogin);
console.log(findUser);

let findObj = findUser["mytasks"].find((task) => task.taskID  == taskID);
console.log(findObj);


document.getElementById("taskname").value = findObj.taskname;
document.getElementById("taskdetails").innerText = findObj.taskdetails;
document.getElementById("taskcategory").value = findObj.taskcategory;
document.getElementById("taskdue").value = findObj.taskdue;
document.getElementById("taskassignee").value = findObj.taskassignee;
document.getElementById("taskstatus").value = findObj.taskstatus;
document.getElementById("projectname").value = findObj.projectname;
document.getElementById("taskpriority").value = findObj.taskpriority;
document.getElementById("tasktags").value = findObj.tasktags;
document.getElementById("taskID").value = findObj.taskID;




let form = document.getElementById("addtask");
form.addEventListener("click",(event) => {
event.preventDefault();

let taskname = document.getElementById("taskname").value;
let taskdetails = document.getElementById("taskdetails").value;
let taskcategory = document.getElementById("taskcategory").value;
let taskdue = document.getElementById("taskdue").value;
let taskassignee = document.getElementById("taskassignee").value;
let taskstatus = document.getElementById("taskstatus").value;
let projectname = document.getElementById("projectname").value;
let taskpriority = document.getElementById("taskpriority").value;
let tasktags = document.getElementById("tasktags").value;
let taskID = document.getElementById("taskID").value;

let newObj = {
    taskname,
    taskdetails,
    taskcategory,
    taskdue,
    taskassignee,
    taskstatus,
    projectname,
    taskpriority,
    tasktags,
    taskID
};


let assignObj = Object.assign(findObj,newObj);

let index = findUser["mytasks"].indexOf(findObj);
console.log(index);


findUser["mytasks"][index] = assignObj;


localStorage.setItem("taskRegister",JSON.stringify(taskRegister));

document.getElementById("addtask").innerText = "Task Edited Successfully";

alert("Task Successfully Edited");

window.location.href = "mytask.html";

})


let deletetask = document.getElementById("deletetask");
deletetask.addEventListener("click",(event) => {
event.preventDefault();

let index = findUser["mytasks"].indexOf(findObj);
console.log(index);

let msg = confirm("Are you sure You want to Delete this task ?");

if(msg === true) {

  findUser["mytasks"].splice(index,1);

 localStorage.setItem("taskRegister",JSON.stringify(taskRegister));

 alert("Task Successfully Deleted");

 window.location.href = "index2.html";

}


});
