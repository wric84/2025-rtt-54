import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FavoriteContext } from "../context/FavoriteContext"


function RecipeDeatilPage(){
    const {addFavorite} = useContext(FavoriteContext)
    const {idMeal} = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(()=> {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                const data = await response.json()
                //console.log(data);
                setRecipe(data.meals[0])
                
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchRecipe()
    },[idMeal])

    if(!recipe) return <h2>Loading Recipe...</h2>

    return(
        <>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h3>Ingredients</h3>
            {Object.keys(recipe)
                .filter(key => key.startsWith("strIngredient")&& recipe[key]).map((key, index) => {
                    console.log(recipe[`strMeasure${index}`])
                    const ingredient = recipe[key]
                    const measure = recipe[`strMeasure${index+1}`]
                    return <li>{ingredient} - {measure}</li>
                })}
            <p>{recipe.strInstructions}</p>
            <button onClick={()=> addFavorite(recipe.idMeal)}>Add to Favorites</button>
        </>
    )
}

export default RecipeDeatilPage