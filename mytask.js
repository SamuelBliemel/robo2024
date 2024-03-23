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
      taskID
    };
  
    console.log(taskObj);

    let taskdues = document.getElementById("taskdue").value;
    let selectedDate = new Date(taskdues);
    let newDate = new Date();
    

  if( selectedDate >= newDate ){
    
    findUser["mytasks"].push(taskObj);
  
    localStorage.setItem("taskRegister",JSON.stringify(taskRegister));
  
    alert("Task Added Successfully");

    location.reload();

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

    taskdivcompleted = document.createElement("a");
    taskdivcompleted.setAttribute("class","taskdiv");
    taskdivcompleted.setAttribute("id","taskdiv1");
     taskdivcompleted.innerHTML = `    <span id="taskstatus1" style="background-color:#8BC34A; color:black;">Completed</span>
     <div id="taskinnerdiv1" class="taskinnerdivs">
     <p id="noresultsfound-p" style="display:none;">Completed Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#task-container").append(taskdivcompleted);

    //show no results found in div tags
    document.addEventListener("DOMContentLoaded", function() {
    let taskinnerdiv1 = document.getElementById("taskinnerdiv1");
    let divCount = taskinnerdiv1.querySelectorAll("a").length;
    console.log(divCount);
    if(divCount === 0){
        document.getElementById("noresultsfound-p").style.display = "block";
    } else {
        document.getElementById("noresultsfound-p").style.display = "nones";
    }
});

    taskdivworking = document.createElement("a");
    taskdivworking.setAttribute("class","taskdiv");
    taskdivworking.setAttribute("id","taskdiv2");
     taskdivworking.innerHTML = `    <span id="taskstatus1" style="background-color:#FFC107; color:black;" >Currently Working</span>
     <div id="taskinnerdiv2" class="taskinnerdivs">
     <p id="noresultsfound2-p" style="display:none;">Currently Working Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#task-container").append(taskdivworking);


        //show no results found in div tags
        document.addEventListener("DOMContentLoaded", function() {
            let taskinnerdiv2 = document.getElementById("taskinnerdiv2");
            let divCount = taskinnerdiv2.querySelectorAll("a").length;
            console.log(divCount);
            if(divCount === 0){
                document.getElementById("noresultsfound2-p").style.display = "block";
            } else {
                document.getElementById("noresultsfound2-p").style.display = "nones";
            }
        });

    taskdivnotcompleted = document.createElement("a");
    taskdivnotcompleted.setAttribute("class","taskdiv");
    taskdivnotcompleted.setAttribute("id","taskdiv3");
     taskdivnotcompleted.innerHTML = `    <span id="taskstatus1" style="background-color:#F44336; color:white;" >Not Completed (Incomplete)</span>
     <div id="taskinnerdiv3" class="taskinnerdivs">
     <p id="noresultsfound3-p" style="display:none;">Not Completed (Incomplete)  <br>Tasks Section Is Empty</p>
     </div>`;
    document.querySelector("#task-container").append(taskdivnotcompleted);


            //show no results found in div tags
            document.addEventListener("DOMContentLoaded", function() {
                let taskinnerdiv3 = document.getElementById("taskinnerdiv3");
                let divCount = taskinnerdiv3.querySelectorAll("a").length;
                console.log(divCount);
                if(divCount === 0){
                    document.getElementById("noresultsfound3-p").style.display = "block";
                } else {
                    document.getElementById("noresultsfound3-p").style.display = "nones";
                }
            });

    taskdivnotyetstarted = document.createElement("a");
    taskdivnotyetstarted.setAttribute("class","taskdiv");
    taskdivnotyetstarted.setAttribute("id","taskdiv4");
     taskdivnotyetstarted.innerHTML = `    <span id="taskstatus1" style="background-color:#9E9E9E; color:white;" >Not Yet Started</span>
     <div id="taskinnerdiv4" class="taskinnerdivs">
     <p id="noresultsfound4-p" style="display:none;">Not Yet Started Tasks <br>Section Is Empty</p>
     </div>`;
    document.querySelector("#task-container").append(taskdivnotyetstarted);


            //show no results found in div tags
            document.addEventListener("DOMContentLoaded", function() {
                let taskinnerdiv4 = document.getElementById("taskinnerdiv4");
                let divCount = taskinnerdiv4.querySelectorAll("a").length;
                console.log(divCount);
                if(divCount === 0){
                    document.getElementById("noresultsfound4-p").style.display = "block";
                } else {
                    document.getElementById("noresultsfound4-p").style.display = "nones";
                }
            });


//reverse tasks recent tasks will come first
for(let i=findUser["mytasks"].length-1; i>=0; i--) {

 taskdiv = document.createElement("a");
 taskdiv.setAttribute("class","taskinnerdiv");
 taskdiv.setAttribute("draggable","true"); 
 taskdiv.setAttribute("ondragstart","drag(event)");
 taskdiv.setAttribute("class","task-item");
 taskdiv.setAttribute("href","../pages/taskdetails.html?id=" + findUser["mytasks"][i]["taskID"]);
 let splitname = findUser["mytasks"][i]["taskname"];
 let splitdesc = findUser["mytasks"][i]["taskdetails"];
 let splittime = findUser["mytasks"][i]["taskdue"];
 

 //color priority
 taskdiv.innerHTML = ` 
 <div class="task-div">
    <p id="taskname1" >${splitname.slice(0,25)}.....</p>
    <p id="taskdetails1" class="task" >${splitdesc.slice(0,40)}....</p>
    <p id="projectname1" ><i class='bx bx-briefcase'></i> ${findUser["mytasks"][i]["projectname"]}</p>
   <div id="taskdue-assign1">
  <p id="taskdue1" ><i class='bx bx-time'></i> ${splittime.split("T")}</p>
  <a id="taskassignee1" href="mailto:${findUser["mytasks"][i]["taskassignee"]}"><i class='bx bx-user-circle'></i> AJMAL</a>
</div> 
    <p id="taskpriority1" class="taskpriority1" ><i class="bx bx-circle" id="bx-circle-${i}"></i> ${findUser["mytasks"][i]["taskpriority"]}</p>
  </div>`;

 if(findUser["mytasks"][i]["taskstatus"] === "Completed" ) {
 document.querySelector("#taskinnerdiv1").append(taskdiv);

 } else if (findUser["mytasks"][i]["taskstatus"] === "Currently Working" ){
    document.querySelector("#taskinnerdiv2").append(taskdiv); 
 } else if (findUser["mytasks"][i]["taskstatus"] === "Not Completed (Incomplete)" ){
    document.querySelector("#taskinnerdiv3").append(taskdiv); 
 } else {
    document.querySelector("#taskinnerdiv4").append(taskdiv);
 }

}

//add colors according to the priority
for (let i = 0; i < findUser["mytasks"].length; i++) {
    const task = findUser["mytasks"][i];
    const priority = task.taskpriority;

    console.log(priority);
  
    const element = document.getElementById(`bx-circle-${i}`);

  if (priority === "High") {
    element.classList.add("red");
  } else if (priority === "Medium") {
    element.classList.add("yellow");
  } else if (priority === "Low") {
    element.classList.add("green");
  }

  }

  
  
  
  
  






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





//draggable div's
 // Get the list items
 const taskItems = document.querySelectorAll('.task-item');

 // Add event listeners for drag events
 taskItems.forEach(item => {
   item.addEventListener('dragstart', dragStart);
   item.addEventListener('dragover', dragOver);
   item.addEventListener('dragenter', dragEnter);
   item.addEventListener('dragleave', dragLeave);
   item.addEventListener('drop', drop);
   item.addEventListener('dragend', dragEnd);
 });
 
 // Store the dragged item
 let draggedItem = null;
 
 // Drag start event handler
 function dragStart(event) {
   draggedItem = this;
   
   setTimeout(() => {
     this.style.opacity = '0.5';
   }, 0);
 }
 
 // Drag over event handler
 function dragOver(event) {
   event.preventDefault();
 }
 
 // Drag enter event handler
 function dragEnter(event) {
   event.preventDefault();
   this.classList.add('drag-over');
 }
 
 // Drag leave event handler
 function dragLeave() {
   this.classList.remove('drag-over');
 }

 function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log(event.target.id);
 }
 
 // Drop event handler
 function drop(event) {
   this.classList.remove('drag-over');
   this.parentNode.insertBefore(draggedItem, this);


 }
 
 // Drag end event handler
 function dragEnd() {
   this.style.opacity = '1';
   draggedItem = null;
 }
 

// //notification to users

// // Request permission to display notifications
// Notification.requestPermission().then(function(permission) {
//     if (permission === 'granted') {

//         console.log(permission);
//       // Get all the task elements
//       // let tasks = document.getElementsByClassName('taskdue');
//       // console.log(tasks);
  
//       // Get the current date
   
  
//       // Loop through each task element
//       for (var i = 0; i < findUser["mytasks"].length; i++) {
//         // let task = tasks[i];
//         // let dueDate = new Date(task.value);
//          console.log(findUser["mytasks"][1]["taskdue"]);

//          let tasks = findUser["mytasks"][1]["taskdue"];

//          let currentDate = new Date();

//          const kolkataOffset = 5.5 * 60 * 60 * 1000; // Convert offset to milliseconds
// const kolkataTime = new Date(currentDate.getTime() + kolkataOffset);

//          const formattedDate = kolkataTime.toISOString().slice(0, 16);

//          console.log(formattedDate);
//         // Compare the due date with the current date
//         if (tasks == formattedDate) {
//           // Display a notification
//           var notification = new Notification('taskMaster App', {
//             body: 'The due date for this task has been reached!',
//             icon : 'https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc',
//           });
         
//           break;
              
//         }
//       }
//     }
//   });


            // // Add optional event listeners for user interactions with the notification
            // notification.onclick = function(event) {
            //   // Handle notification click event
            //   window.open();
            // };
            // notification.onclose = function(event) {
            //   // Handle notification close event
            //   window.close();
            //   alert("Notification Closed");
            // };


            // navigator.serviceWorker.ready.then((registration) => {
            //   registration.pushManager
            //     .subscribe({ userVisibleOnly: true })
            //     .then((subscription) => {
            //       // Send the subscription endpoint to your server for storage
            //       console.log(subscription);
            //     });
            // });

  
//   // Add snooze functionality
// notification.addEventListener('action', function(event) {
//   if (event.action === 'snooze') {
//     // Perform snooze action
//     console.log("Notification snoozed");
//   }
// });

// // Set notification action button for snooze
// notification.addEventListener('show', function() {
//   notification.addAction('snooze', 'Snooze', 'path-to-snooze-icon.png');
// });




