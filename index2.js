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


//add task div open
let addtask = document.getElementById("addtask");
addtask.addEventListener("click",(event) => {
event.preventDefault();

  document.getElementById("popupOverlay").style.display= "block";
})



//cancel task
let closetask = document.getElementById("closePopup");
closetask.addEventListener("click",(event) => {
event.preventDefault();

  document.getElementById("popupOverlay").style.display= "none";
})


//userobj array



//add task
let addnewtask = document.getElementById("form");
addnewtask.addEventListener("submit",(event) => {
event.preventDefault();

   if(JSON.parse(localStorage.getItem("taskArray")) !== null ) {

    taskArray = JSON.parse(localStorage.getItem("taskArray"));


    let taskname = document.getElementById("taskname").value;
    let taskdetails = document.getElementById("taskdetails").value;
    let taskcategory = document.getElementById("taskcategory").value;
    let taskdue = document.getElementById("taskdue").value;
    let taskassignee = document.getElementById("taskassignee").value;
    let taskstatus = document.getElementById("taskstatus").value;
    let projectname = document.getElementById("projectname").value;
    let taskpriority = document.getElementById("taskpriority").value;
    let tasktags = document.getElementById("tasktags").value;
    let taskID = Date.now();
    let dateposted = moment().format('MMMM Do YYYY, h:mm:ss a');
  
    let taskobj = {
      taskname,
      taskdetails,
      taskcategory,
      taskdue,
      taskassignee,
      taskstatus,
      projectname,
      taskpriority,
      tasktags,
      taskID,
      dateposted
    };
  
    console.log(taskobj
);

    let taskdues = document.getElementById("taskdue").value;
    let selectedDate = new Date(taskdues);
    let newDate = new Date();
    

  if( selectedDate >= newDate ){
    
    findUser["mytasks"].push(taskobj
);


    // Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.



 
    localStorage.setItem("taskRegister",JSON.stringify(taskRegister));
  
    alert("Task Added Successfully");

    // location.reload();

  } else {
    alert("Task DueDate Must be Greater than or Equal to Today's Date");
  }

   } else {

   
  let taskname = document.getElementById("taskname").value;
  let taskdetails = document.getElementById("taskdetails").value;
  let taskcategory = document.getElementById("taskcategory").value;
  let taskdue = document.getElementById("taskdue").value;
  let taskassignee = document.getElementById("taskassignee").value;
  let taskstatus = document.getElementById("taskstatus").value;
  let projectname = document.getElementById("projectname").value;
  let taskpriority = document.getElementById("taskpriority").value;
  let tasktags = document.getElementById("tasktags").value;
  let taskID = Date.now();
  let dateposted = moment().format('MMMM Do YYYY, h:mm:ss a');


  let taskObj = {
    taskname,
    taskdetails,
    taskcategory,
    taskdue,
    taskassignee,
    taskstatus,
    projectname,
    taskpriority,
    tasktags,
    taskID,
    dateposted
  };

  console.log(taskObj);

  //set this array in userobj
  findUser["mytasks"].push(taskObj);

  localStorage.setItem("taskRegister",JSON.stringify(taskRegister));

  alert("Task Added Successfully");

  location.reload();


   }
  
})






//for loop tasks create
console.log(findUser["mytasks"]);


let taskdiv;

//reverse tasks recent tasks will come first
for(let i=0; i<findUser["mytasks"].length; i++) {

 taskdiv = document.createElement("a");
 taskdiv.setAttribute("class","taskdiv");
 taskdiv.setAttribute("id",`taskdiv-${i}`);
 taskdiv.setAttribute("href","pages/taskdetails.html?id=" + findUser["mytasks"][i]["taskID"]);
 let splitname = findUser["mytasks"][i]["taskname"];
 let splitdesc = findUser["mytasks"][i]["taskdetails"];
 let splittime = findUser["mytasks"][i]["taskdue"];

 //color priority
 taskdiv.innerHTML = `    <span id="taskstatus1">${findUser["mytasks"][i]["taskstatus"]}</span>
 <div class="taskinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytasks"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytasks"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytasks"][i]["taskpriority"]}</p>
 </div>`;
  
 document.querySelector("#task-container").append(taskdiv);

}

//logut button event
let logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("submit",(event) => {
event.preventDefault();

let msg = confirm("Are you sure You want to LogOut ?");

if(msg === true){

  localStorage.removeItem("taskLogin");

  let newWindow = window.open("../index.html","noopener,noreferrer");
  window.close();
  newWindow.focus();
}
})



//searchbar query event
let searchbar = document.getElementById("search");
searchbar.addEventListener("input",(event)=> {
event.preventDefault();

let cards = document.getElementsByClassName("taskdiv");

for(let i=0; i<cards.length;i++){
  let element = cards[i];

  if(element.innerText.toLowerCase().includes(searchbar.value.toLowerCase())){
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
})

//searchbar query event
let search = document.getElementById("searchbarfilter");
search.addEventListener("input",(event)=> {
event.preventDefault();

let cards = document.getElementsByClassName("taskdiv");

for(let i=0; i<cards.length;i++){
  let element = cards[i];

  if(element.innerText.toLowerCase().includes(search.value.toLowerCase())){
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
})



let selectsort = document.getElementById("sort");
selectsort.addEventListener("change",(event)=>{
event.preventDefault();

let selectsortvalue = document.getElementById("sort").value;
console.log(selectsortvalue);

if(selectsortvalue === "A-Z (Ascending Order)"){
  findUser["mytasks"].sort(
  function mysort(a,b) {
  let nameA = a.taskname.toLowerCase();
  let nameB = b.taskname.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
  });
   
  document.querySelector("#task-container").style.display = "none";
  document.querySelector("#task-container3").style.display = "none";
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;

  let taskdiv;

//reverse tasks recent tasks will come first
for(let i=0; i<findUser["mytasks"].length; i++) {

 taskdiv = document.createElement("a");
 taskdiv.setAttribute("class","taskdiv");
 taskdiv.setAttribute("id",`taskdiv-${i}`);
 taskdiv.setAttribute("href","pages/taskdetails.html?id=" + findUser["mytasks"][i]["taskID"]);
 let splitname = findUser["mytasks"][i]["taskname"];
 let splitdesc = findUser["mytasks"][i]["taskdetails"];
 let splittime = findUser["mytasks"][i]["taskdue"];

 //color priority
 taskdiv.innerHTML = `    <span id="taskstatus1">${findUser["mytasks"][i]["taskstatus"]}</span>
 <div class="taskinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytasks"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytasks"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytasks"][i]["taskpriority"]}</p>
 </div>`;

  
 document.querySelector("#task-container2").append(taskdiv);

}

  console.log(findUser["mytasks"]);



} else if(selectsortvalue === "Z-A (Descending Order)"){
  findUser["mytasks"].sort(
  function mysort(a,b) {
  let nameA = a.taskname.toLowerCase();
  let nameB = b.taskname.toLowerCase();
  if (nameA < nameB) return 1;
  if (nameA > nameB) return -1;
  return 0;
  });


  document.querySelector("#task-container").style.display = "none";
  document.querySelector("#task-container2").style.display = "none";
  document.getElementById("option1").disabled = true;
  document.getElementById("option2").disabled = true;
  document.getElementById("option3").disabled = true;


  let taskdiv;

//reverse tasks recent tasks will come first
for(let i=0; i<findUser["mytasks"].length; i++) {

 taskdiv = document.createElement("a");
 taskdiv.setAttribute("class","taskdiv");
 taskdiv.setAttribute("id",`taskdiv-${i}`);
 taskdiv.setAttribute("href","pages/taskdetails.html?id=" + findUser["mytasks"][i]["taskID"]);
 let splitname = findUser["mytasks"][i]["taskname"];
 let splitdesc = findUser["mytasks"][i]["taskdetails"];
 let splittime = findUser["mytasks"][i]["taskdue"];

 //color priority
 taskdiv.innerHTML = `    <span id="taskstatus1">${findUser["mytasks"][i]["taskstatus"]}</span>
 <div class="taskinnerdiv">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytasks"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytasks"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytasks"][i]["taskpriority"]}</p>
 </div>`;
  
 document.querySelector("#task-container3").append(taskdiv);


}
  console.log(findUser["mytasks"]);
} else if (selectsortvalue === "Based On Due date") {

   findUser["mytasks"].sort(
    function mysort(a,b){
      return new Date(a.taskdue) - new Date(b.taskdue);
    }
   );

   findUser["mytasks"].forEach(
    function (task){
      return task.taskdue;
    }
   )

   console.log(findUser["mytasks"]);


   for(let i=0; i<findUser["mytasks"].length; i++) {

    taskdiv = document.createElement("a");
    taskdiv.setAttribute("class","taskdiv");
    taskdiv.setAttribute("id",`taskdiv-${i}`);
    taskdiv.setAttribute("href","pages/taskdetails.html?id=" + findUser["mytasks"][i]["taskID"]);
    let splitname = findUser["mytasks"][i]["taskname"];
    let splitdesc = findUser["mytasks"][i]["taskdetails"];
    let splittime = findUser["mytasks"][i]["taskdue"];
   
    //color priority
    taskdiv.innerHTML = `    <span id="taskstatus1">${findUser["mytasks"][i]["taskstatus"]}</span>
    <div class="taskinnerdiv">
       <p id="taskname1" >${splitname.slice(0,25)}.....</p>
       <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
       <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytasks"][i]["projectname"]}</p>
      <div id="taskdue-assign1">
     <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
     <a id="taskassignee1" href="mailto:${findUser["mytasks"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
   </div> 
       <p id="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytasks"][i]["taskpriority"]}</p>
    </div>`;

     
    document.querySelector("#task-container4").append(taskdiv);
    document.querySelector("#task-container").style.display = "none";
    document.querySelector("#task-container2").style.display = "none";
    document.querySelector("#task-container3").style.display = "none";
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;

   
   }

}

})

//add colors according to the priority
for (let i = 0; i < findUser["mytasks"].length; i++) {
  const task = findUser["mytasks"][i];
  const priority = task.taskpriority;

  console.log(priority);

  const element = document.getElementById(`bx-circle-${i}`);
  const taskdiv = document.getElementById(`taskdiv-${i}`);

if (priority === "High") {
  element.classList.add("red");
  taskdiv.classList.add("lightred");
} else if (priority === "Medium") {
  element.classList.add("yellow");
  taskdiv.classList.add("lightyellow");
} else if (priority === "Low") {
  element.classList.add("green");
  taskdiv.classList.add("lightgreen");
}

}




let selectfilter = document.getElementById("filter");
selectfilter.addEventListener("change",(event)=>{
event.preventDefault();

let selectfiltervalue = document.getElementById("filter").value;
console.log(selectfiltervalue);


document.getElementById("searchbarfilter").style.display = "block";
document.getElementById("searchicon").style.display = "block";

if(selectfiltervalue === "Based On Category"){
  document.getElementById("searchbarfilter").placeholder = "Search Category : Academic Tasks"
} else if (selectfiltervalue === "Based On Assignee") {
  document.getElementById("searchbarfilter").placeholder = "Search Assignee : freekyajmal@gmail.com"
} else if (selectfiltervalue === "Based On Status") {
  document.getElementById("searchbarfilter").placeholder = "Search Status : Completed"
} else if (selectfiltervalue === "Based On Priority") {
  document.getElementById("searchbarfilter").placeholder = "Search Priority : High"
} else if (selectfiltervalue === "Based On Tags") {
  document.getElementById("searchbarfilter").placeholder = "Search Tags : #Project #Presentation"
}


});

