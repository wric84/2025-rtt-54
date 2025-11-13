import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function NavBar(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    const buttonStyle = {
            background: theme === 'dark' ? '#333' : '#FFF',
            color: theme === 'dark' ? "#FFF" : "#333",
            padding: '10px',
            boder: `1px solid ${theme === 'dark' ? '#FFF' : "#333"}`
        }

    return(
        <>
        
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default NavBar