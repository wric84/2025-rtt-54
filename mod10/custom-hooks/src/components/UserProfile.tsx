import { useContext } from "react"
import UserContext from "../context/userContext"


function UserProfile(){
    const {currentUserm logIn, logOut} = useContext(UserContext)
    return(
        
        <>
            <h2>User Profile</h2>
            {currentUser.username? (
                <div>{currentUser.username}</div>
            ):(
                "Please Log In"
            )}

            {!currentUser.username && (
                <button onClick={() => logIn("Colton")}>Login</button>
            )}

            {currentUser.username && <button onClick={()=> logOut()}>Logout</button>}
        </>
    )
}

export default UserProfile