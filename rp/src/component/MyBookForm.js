import axios from "axios"
import {useState} from "react"
import React from "react"
import {useNavigate} from "react-router-dom"

function MyBookForm(){
    const navigate=useNavigate()
    //For my book return
    const[goToBook,setGoToBook]= useState(false)
    //state setup
    const [Form,setForm]=useState({
        name:"",
        ingredents:"",
        prep:"",
        cook:""
      })


      const handleChange=(e)=>{
        const {name,value}=e.target;
        
        setForm(prev =>{
          return{
            ...prev,
            [name]:value
          }
        })
         
      }

      if(goToBook){
        navigate("/")
      }
      const handleClick = (e) => {
        e.preventDefault() 
        setGoToBook(true) 
        axios
        .post("http://localhost:5000/api",Form)
         .then((res)=>console.log(res))
         .catch((err)=> console.log(err))      
        };

return(
  <div>
    <form>
        <label form="name">name</label><br/>
        <input type="name" name="name" value={Form.name} placeholder="Name of recipe" onChange={handleChange}></input><br/>
        <div className="textfield">
        <label form="ingredents">ingredents</label><br/>
        <input type="text" name="ingredents" value={Form.ingredents}placeholder="ingredents" onChange={handleChange}></input><br/>
        <label form="prep">prep</label><br/>
        <input type="text" name="prep" value={Form.prep}placeholder="prep" onChange={handleChange}></input><br/>
        <label form="cook">cook</label><br/>
        <input type="text" name="cook" value={Form.cook} placeholder="cooking instruction" onChange={handleChange}></input><br/>
        </div>
            <button onClick={handleClick} variant="primary" type="submit">
            submit
            </button>
    </form>
   
    </div>
)
}
export default MyBookForm