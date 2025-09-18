console.log("Hello World from js");

// Defining our elements from our html in our js file
const taskNameInput = document.getElementById("taskName")
const taskCategoryInput = document.getElementById("taskCategory")
const taskDeadlineInput = document.getElementById("taskDeadline")
const taskStatusSelect = document.getElementById("taskStatus")
const addTaskBtn = document.getElementById("addTaskBtn")
// const TaskBodyUl = document.getElementById("taskBody")
const tasksBody = document.getElementById("tasksBody")

// console.log(addTaskBtn);
// console.log(taskNameInput);

let tasks = []

//function to add button
function addTask() {

    //we need to take the users input from the form element and make it a variable
    const name = taskNameInput.value
    const category = taskCategoryInput.value
    const deadline = taskDeadlineInput.value
    const status = taskStatusSelect.value

    const newTask = {
        //object will contain all of our inputs from our form, e.g. taskName, category, etc
        name,
        category,
        deadline,
        status
    }
    //we need to push our task to our task list
    
    tasks.push(newTask)
    console.log(tasks);
    renderTasks()
    
}

addTaskBtn.addEventListener('click', addTask)

//Create a li for taskList
// function createLiForTask(task){
//     const li = document.createElement('li')
// }

//Render our task list
function renderTasks(){
    tasks.forEach(task => {
        //create a new table row
        const tr = document.createElement('tr')

        //Task name
        const nameTdata = document.createElement('td')
        nameTdata.textContent = task.name
        tr.appendChild(nameTdata)

        //Task category
        const categoryTData = document.createElement('td')
        categoryTData.textContent = task.category
        tr.appendChild(categoryTData)

        //Task Deadline
        const deadlineTData = document.createElement('td')
        deadlineTData.textContent = task.deadline
        tr.appendChild(deadlineTData)

        //TaskStatus
        const statusTDate = document.createElement('td')
        statusTDate.textContent = task.status
        tr.appendChild(statusTDate)

        tasksBody.appendChild(tr)

        // //create a new element called li
        // const li = document.createElement("li")
        // //this line adds the text to the li
        // li.innerHTML = task.name
        // //this line adds the li to the ul
        // TaskBodyUl.appendChild(li)
    })
}