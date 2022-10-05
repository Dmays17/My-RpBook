import { useEffect, useState } from "react"
import Recipe from "./Recipe"

function WorldBook() {

    const APP_ID = "23e0b37f";
    const APP_KEY = "ea4e529090068d44d79d6e8afd1aec5f"	
    
    const [allRecipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        recipes();
    }, [])

    const recipes = async () => {
        const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data =  await response.json();
        setRecipes(data.hits)
        console.log(response.data)

    }

    const submitForm = e => {
       e.preventDefault();
       recipes(); 
    }
function updateRecipes() {
    const addToMyBook = document.getElementsByClassName('add-recipe')
        for (var i =0; i < addToMyBook.length; i++) {
            const button = addToMyBook[i]
            button.addEventListener('click', addToRecipeClicked)
        }
    }
function addToRecipeClicked(event) {
    const button = event.target
    const recipeItem = button.parentElement.parentElement
    const recipeName = recipeItem.getElementsByClassName('recipe-calorie')[0]
    console.log(recipeName)


}


    return(
        <div>
            <form className = "search" onSubmit={submitForm}>
                <input className = "search-bar" type = "text" placeholder="enter food recipe" value={query} onChange={e => setQuery(e.target.value)} />
                <button className = "search-button" type = "submit">
                    Search
                </button>
            </form>
            {allRecipes.map(recipe => (
                <Recipe title={recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} />
            ))}
        </div>
    )
}

export default WorldBook 