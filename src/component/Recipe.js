
import {useNavigate} from 'react-router-dom'
import RecipeDetails from "./RecipeDetails"
import {useState} from 'react'
//import Card from 'react-bootstrap/Card'

const Recipe = ({title, image, url, ingredients, favorite}) => {
    let navigate = useNavigate()
    const [show,setShow] = useState(false)
    return(
        <div className="details" key = {title} /*onClick={()=>{navigate(`/${title}`)}}*/>
            <h1>{title}</h1>
            <img src = {image} alt = ""/>
            <a href={url} target="_blank" rel="noreferrer">Click here for recipe details!</a>
            <h3>{favorite}</h3>
            <button onClick={()=>setShow(!show)}>Ingredients</button>
            {show&&<RecipeDetails ingredients={ingredients}/>}
        </div>
    )
}

export default Recipe