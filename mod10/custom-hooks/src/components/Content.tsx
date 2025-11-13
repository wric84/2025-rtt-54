import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Context(){
    const {theme} = useContext(ThemeContext)
    console.log(theme);
    
    return(
        <div>
            <h2>Some Content</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, consequuntur asperiores. Officiis sed et porro a natus, tenetur obcaecati sit. Placeat totam sunt dolores culpa voluptatem veniam, in consequuntur eos!</p>
        </div>
    )
}

export default Context