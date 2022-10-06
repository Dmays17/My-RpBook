import { useEffect, useState } from "react"
import Recipe from "./Recipe"
import AddFavorites from "./AddFavorites"



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
        console.log(data)

    }

    const submitForm = e => {
       e.preventDefault();
       recipes(); 
    }

    return(
        <div className="searchBar">
        <h2 className="searchTitle">Please enter a recipe below!</h2>
        <div className = "App">
            <form className = "search" onSubmit={submitForm}>
                <input className = "search-bar" type = "text" placeholder="enter food recipe" value={query} onChange={e => setQuery(e.target.value)} />
                <button className = "search-button" type = "submit">
                    Search
                </button>
            </form>
            <div className="recipes">
            {allRecipes.map(recipe => (
                <Recipe key = {recipe.recipe.label} url = {recipe.recipe.url} title={recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} ingredients={recipe.recipe.ingredients} favorite = {AddFavorites} />
            ))}
            </div>
        </div>
        </div>
    )
}

export default WorldBook 