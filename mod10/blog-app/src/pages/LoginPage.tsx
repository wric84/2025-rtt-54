import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function LoginPage(){

    const {login} = useContext(AuthContext)

    const handleLogin=()=> {

        login()
    }

    return(
        <main>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </main>
    )
}

export default LoginPage