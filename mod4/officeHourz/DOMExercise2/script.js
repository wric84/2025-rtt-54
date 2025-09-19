console.log("Hello World");

const taskNameInput = document.getElementById("taskName")
//console.log(taskNameInput);
const taskCategoryInput = document.getElementById("taskCategory")
const taskDeadlineInput = document.getElementById("taskDeadline")
const taskStatusSelect = document.getElementById("taskStatus")
const addTaskBtn = document.getElementById("addTaskBtn")
// console.log(taskCategoryInput);
// console.log(taskDeadlineInput);
// console.log(taskStatusSelect);
// console.log(addTaskBtn);
//const taskBodyUl = document.getElementById("taskBodyUl")
const tasksTBody = document.getElementById('tasksTBody')

let tasks = []

function addTask(){
    //grab the users input
    const name = taskNameInput.value
    const category = taskCategoryInput.value
    const deadline = taskDeadlineInput.value
    const status = taskStatusSelect.value

    //group together parts of task to make a whole task
    const newTask = {
        name, 
        category, 
        deadline,
        status
    }
    //take task and push into our tasks list
    tasks.push(newTask)
    console.log(tasks);

    //clear inputs
    taskNameInput.value = ""
    taskCategoryInput.value = ""
    taskDeadlineInput.value = ""
    taskStatusSelect.value = "In Progress"
    
    displayTasks()
}

//create a function to display our tasks
function displayTasks(){

    tasksTBody.innerHTML = ""
    
    //take the tasks list and for every item in the list show each one
    tasks.forEach(task => {
        // //create a li 
        // const li = document.createElement("li")
        // //add the taskName to the innerHTML of our li
        // li.innerHTML = `Task "${task.name}" was created in the ${task.category} category and the deadline is ${task.deadline}`
        // //append the created li to our list
        // taskBodyUl.appendChild(li)

        // create a new table row
        const tr = document.createElement('tr')
        //add all our tasks to our tr

        // task Name
        const nameTData = document.createElement('td')
        //added the user input to the element
        nameTData.textContent = task.name
        //append td to the tr
        tr.appendChild(nameTData)

        //task Category
        const categoryTData = document.createElement('td')
        //added the user input to the element
        categoryTData.textContent = task.category
        //append td to the tr
        tr.appendChild(categoryTData)

        //task Deadline
        const deadlineTDate = document.createElement('td')
        //add the user input to the element
        deadlineTDate.textContent = task.deadline
        //append td to the tr
        tr.appendChild(deadlineTDate)

        //task Status
        const statusTData = document.createElement('td')
        //add the user input to the element
        statusTData.innerHTML = task.status
        //apped td to the tr
        tr.appendChild(statusTData)

        //append the entire row to the table body
        tasksTBody.appendChild(tr)

    })

}

//take the addTask function and add it onto our button with an add event listener
addTaskBtn.addEventListener("click", addTask)
