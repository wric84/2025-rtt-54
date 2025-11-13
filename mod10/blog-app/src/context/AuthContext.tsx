import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null)

interface AuthProviderProps{
    children: React.ReactNodes
}

export function AuthProvider({children}: AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    const login=()=> {
        setIsAuthenticated(true)
        navigate('/admin')
    }

    const logout = () => setIsAuthenticated(false)

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}