import {useParams} from 'react-router-dom'

const RecipeDetails = ({ingredients}) => {
    /*const {title} = useParams()*/
    return ingredients.map(ingredient=>{
        return (
            <ul key={ingredient} className="ingredient-list">
                <li className="ingredient-text">
                    {ingredient.text}
                </li>
            
            </ul>
        )
    })

}

export default RecipeDetails