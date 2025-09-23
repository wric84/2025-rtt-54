const todosCounter = document.getElementById('counter')
const todoInput = document.getElementById('todo-input')
const addTodoBtn = document.getElementById('add-todo-btn')
const todosList = document.getElementById('todo-list')

addTodoBtn.addEventListener('click', function(){
    const inputText = todoInput.value
    console.log(inputText);
    
    const newLi = document.createElement('li')
    newLi.textContent = inputText
    newLi.classList.add('item')

    const removeBtn = document.createElement('button')
    removeBtn.textContent = "Remove"
    removeBtn.classList.add('remove')

    newLi.appendChild(removeBtn)
    todosList.appendChild(newLi)
})

todosList.addEventListener('click', function(event){
    console.dir(event)

    if(event.target.classList.contains('remove')){
        event.target.closest('li').remove()
    }

    if(event.target.classList.contains('item')){
        event.target.classList.toggle('completed')
    }
})

// Counts how many todos (lis) we currently have in the ui
function countTodos() {
    const todos = document.getElementsByClassName('item');
    console.log(todos.length);
    todosCounter.textContent = todos.length;
}