import { useEffect, useState } from "react"
import Recipe from "./Recipe"

function WorldBook() {

    const APP_ID = "994c38dc";
    const APP_KEY = "7e112fd69a42767ad086abc60eff87b7"	
    
    const [allRecipes, setRecipes] = useState([])

    useEffect(() => {
        recipes();
    }, [])

    const recipes = async () => {
        const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data =  await response.json();
        setRecipes(data.hits)

    }

    return(
        <div>
            <form className = "search">
                <input className = "search-bar" type = "text" />
                <button className = "search-button" type = "submit">
                    search
                </button>
            </form>
            {allRecipes.map(recipe => (
                <Recipe title={recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} />
            ))}
        </div>
    )
}

export default WorldBook 