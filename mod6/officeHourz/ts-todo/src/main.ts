import './style.css'

const form = document.getElementById('todo-form') as HTMLFormElement | null
const input = document.getElementById('todo-input') as HTMLInputElement
const list = document.getElementById('todo-list') as HTMLUListElement
const btn = document.getElementById('form-submit-btn') as HTMLButtonElement | null

interface Todo {
  id: number,
  text: string
}

let todos: Todo[] = []


function addTodo(text:string){
  todos.push({id: Date.now(), text: text})
  render()
}

form?.addEventListener('submit', (e)=> {
  e.preventDefault()
  addTodo(input.value)
  console.log(todos);
  input.value = ''
  
})

function deleteTodo(id: number){
  todos = todos.filter((todo) =>todo.id !== id)
  console.log(todos);
  render()
  
}

function render(){
  list.innerHTML = ""
  

  for(const todo of todos){
    const li = document.createElement('li')
    li.innerHTML = todo.text
    list.appendChild(li)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "Delete"
    deleteBtn.type = 'button'
    deleteBtn.addEventListener('click', ()=>{
      deleteTodo(todo.id)
    })
    li.appendChild(deleteBtn)
  }
}