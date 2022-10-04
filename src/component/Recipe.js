import {useNavigate} from 'react-router-dom'


const Recipe = ({title, calories, image, ingredients}) => {
    let navigate = useNavigate()
    return(
        <div style={{
            'display': 'inline-block',
            'width': '32vw',
            'height': '35vh',
            'border': '1px solid black',
            'margin' : '3px',
            'position': 'relative'
        }} className="details" key = {title} onClick={()=>{navigate(`/${title}`)}}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src = {image} alt = "" width="250" height="200" />
        </div>
    )
}

export default Recipe