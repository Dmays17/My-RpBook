import axios from "axios"
import {useState} from "react"
import {useNavigate}from "react-router-dom"
import React from "react"
function MyBook(){

const navigate=useNavigate()
const[goToForm,setGoToForm]= useState(false)
if(goToForm){
    navigate("/MyBookForm")
    
  }
const handleClick = (e) => {
    e.preventDefault()  
    setGoToForm(true)
}

return(
    <div className="MyBook">
        <h1>MyBook</h1>
        <button onClick={handleClick} variant="primary" type="submit">
            Add My Recipe
            </button>
    </div>
)
}
export default MyBook;