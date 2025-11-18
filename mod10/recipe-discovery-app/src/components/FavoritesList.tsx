import { useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"

function FavoritesList(){
    const {favorites} = useContext(FavoriteContext)
    console.log(favorites)

    return(
        <>
        <h2>FavoritesList</h2>
        {/* {favorites.length == 0 && <p>No favorites yet... :(</p>} */}
        

        </>
    )
}

export default FavoritesList