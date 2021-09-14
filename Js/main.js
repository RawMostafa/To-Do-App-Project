let addBtn    = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let noTasks   = document.getElementById('noTasks');
let AllTasks  = document.getElementById('AllTasks');
let card      = document.getElementById('main');
let openbtn   = document.getElementById('openbtn');

//====== Add Task======
openbtn.onclick = function () {
    card.classList.remove('none');
    openbtn.classList.add('none');
}
let addTask = ()=>{
    let taskdata = taskInput.value;
    if(taskdata.trim()=="")
    {
        alert("You Must Enter Valid Data");
    }
    else
    {
        noTasks.classList.add('none');
        // AllTasks.innerText=taskdata;
        let newDivTask =document.createElement('div');
        newDivTask.classList="alert alert-info";
        newDivTask.append(taskdata);
        newDivTask.innerHTML += `<i class="fas fa-trash-alt float-right mr-5px"></i>`;
        AllTasks.append(newDivTask);
        taskInput.value="";
        card.classList.add('none');
        openbtn.classList.remove('none');
    }
}
// =======call button function==========
addBtn.addEventListener('click',addTask);

// =======call deletTask function==========
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-alt')) {
        e.target.parentElement.remove()
        
        if (AllTasks.childNodes.length==0) 
        {
            noTasks.classList.remove('none');
        }
    }
})