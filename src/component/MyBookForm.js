import axios from "axios"
import {useState} from "react"
function MyBookForm(){

    const [Form,setForm]=useState({
        name:"",
        ingredents:"",
        prep:"",
        cook:""  
      })

      const handleChange=(e)=>{
        const {name,value}=e.target;
      
        setForm((prev)=>{
          return({
            ...prev,
            [name]:value,
          })
        })
         
      }

      const handleClick = (e) => {
        e.preventDefault()  
        axios
        .post("",Form)
         .then((res)=>console.log(res))
         .catch((err)=> console.log(err))
      
         
         
        };
return(
    <form>
        <label form="name">name</label><br/>
        <input type="name" name="name" placeholder="Name of recipe"></input><br/>
        <label form="ingredents">ingredents</label><br/>
        <input type="text" name="ingredents" placeholder="ingredents"></input><br/>
        <label form="prep">prep</label><br/>
        <input type="text" name="prep" placeholder="prep"></input><br/>
        <label form="cook">cook</label><br/>
        <input type="text" name="cook" placeholder="cooking instruction"></input><br/>
            <button onClick={handleClick} variant="primary" type="submit">
            submit
            </button>
    </form>
)
}
export default MyBookForm