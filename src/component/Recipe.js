const Recipe = ({title, calories, image}) => {
    return(
        <div style={{
            'display': 'inline-block',
            'width': '32vw',
            'height': '35vh',
            'border': '1px solid black',
            'margin' : '3px',
            'position': 'relative'
        }}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src = {image} alt = "" width="250" height="200" />
        </div>
    )
}

export default Recipe