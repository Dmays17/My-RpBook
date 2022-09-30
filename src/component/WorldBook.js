import { useEffect, useState } from "react"


function WorldBook() {

    const APP_ID = "994c38dc";
    const APP_KEY = "7e112fd69a42767ad086abc60eff87b7"	
    

    useEffect(() => {
        recipes();
    }, [])

    const recipes = async () => {
        const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data =  await response.json();
        console.log(data)

    }

    return(
        <div>
            <form className = "search">
                <input className = "search-bar" type = "text" />
                <button className = "search-button" type = "submit">
                    search
                </button>
            </form>
        </div>
    )
}

export default WorldBook 