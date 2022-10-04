import {useParams} from 'react-router-dom'
import React from 'react'

const RecipeDetails = ({ingredients}) => {
    const {title} = useParams()
    return(
        <div>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeDetails