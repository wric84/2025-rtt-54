// console.log("hello world");
const form = document.getElementById("loginForm")
const message = document.getElementById('message')
const rememberMe = document.getElementById('rememberMe')
const logoutBtn = document.getElementById('logout')
const themeBtn = document.getElementById('themeBtn')

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark")
}

themeBtn.addEventListener("click", ()=> {
    document.body.classList.toggle('dark')

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
})

if(localStorage.getItem("savedUsername")){
    document.getElementById('username').value = localStorage.getItem('savedUsername')
    document.getElementById('password').value = localStorage.getItem('savedPassword')
    message.textContent = `Welcome, ${localStorage.getItem('savedUsername')}`

    rememberMe.checked = true
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    // console.log(`Username: ${username}, Password: ${password}`);
    
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

    if(rememberMe.checked){
        localStorage.setItem("savedUsername", username)
        localStorage.setItem("savedPassword", password)
    }else{
        localStorage.removeItem("savedUsername")
        localStorage.removeItem('savedPassword')
    }

    message.textContent = `Welcome, ${username}`
})

logoutBtn.addEventListener("click", ()=>{
    localStorage.clear()
    message.textContent = "You are logged out"
})