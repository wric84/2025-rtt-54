import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import './App.css'
import NavBar from './components/NavBar'
import Context from './components/Content'
import UserContext from './context/userContext'
import UserProfile from './components/UserProfile'

function App() {
  const [theme, setTheme] = useState('light')
  const [currentUser, setCurrentUser] = useState({username: ''})
 
  const toggleTheme = () => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')


  const logIn = (username: string) => setCurrentUser(prev => ({...prev, username}))
  const logOut = () => setCurrentUser({username: ''})

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <UserContext.Provider value={currentUser, logIn, logOut}>
      <NavBar/>
      <h1>Context API</h1>
      <Context/>
      <UserProfile/>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
