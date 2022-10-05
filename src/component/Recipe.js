import './component.css';
const Recipe = ({title, calories, image}) => {
    return(
        <div className="recipe-display" style={{
            'display': 'inline-block',
            'width': '35vw',
            'height': '35vh',
            'border': '1px solid black',
            'margin' : '3px',
            'position': 'relative'
        }}>
            <div className="recipe-title"><h1>{title}</h1></div>
            <div className="recipe-calorie"><p>Number of calories: {calories}</p></div>
            <div className="recipe-img"><img src = {image} alt = "" width="250" height="200" />
            <button type="button" class="btn btn-primary add-recipe">Add to MyBook</button>
            </div>
            
        </div>
    )
}

export default Recipe