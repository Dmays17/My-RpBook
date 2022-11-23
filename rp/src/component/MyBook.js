import React, {useEffect,useState} from "react"
import {useNavigate}from "react-router-dom"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyBook(){
//For my bookForm 
const navigate=useNavigate()
const[goToForm,setGoToForm]= useState(false)
//modal setup
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



//state setup
const [Form,setForm]=useState([])
const [updateForm,setUpdatedForm]=useState({})
  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/Mybook")
    .then((res) => {
        console.log(res)
        setForm(res.data)
    }).catch((err)=>console.log(err))

    },[])


if(goToForm){
    navigate("/MyBookForm")
    
  }
const handleClick = (e) => {
    e.preventDefault()  
    setGoToForm(true)
}

const deletePost=(id)=>{
    console.log(id)

    axios.delete(`http://localhost:5000/api/delete/${id}`)
    .then(res => console.log(res))
    .catch((err)=>console.log(err))

    window.location.reload()
}

const updatePost=(resp)=>{
     console.log(resp)
    setUpdatedForm(resp)
    handleShow()
}

const handleChange=(e)=>{
    const {name,value}=e.target;
    setUpdatedForm((prev) =>{
        return{
            ...prev,
            [name]:value,
        }
    })
}

const saveUpdateForm=()=>{
    axios
        .put(`http://localhost:5000/api/update/${updateForm._id}`,updateForm)
        .then(res => console.log(res))
        .catch((err)=> console.log(err))

    handleClose()
    window.location.reload()
   console.log(updateForm);
}

return(

    <div className="MyBook">
        
        <div className='title' >
        <h1>Welcome to MyRPBook!</h1>
        </div>

        <h1>MyBook</h1>
        <button onClick={handleClick} variant="primary" type="submit">
            Add My Recipe
            </button>
        <div style={{
            textAlign:"center",
            width:"90%",
            margin:"auto auto"
        }}>
        
        {Form.map(resp=>
        <div key={resp._id}
        style={{
            border:"solid lightgray 1px",
            borderRadius:"8px",
            marginBottom:"1rem",
            padding:"1rem"
        }}>
            <h1>{resp.name}</h1>
            <h3>Ingredents</h3>
            <p>{resp.ingredents}</p>
            <h3>Prep</h3>
            <p>{resp.prep}</p>
            <h3>Cooking Instruction</h3>
            <p>{resp.cook}</p>
                <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
{/* Start of modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label form="name">name</label><br/>
        <input type="name" name="name" value={updateForm.name ? updateForm.name :""} onChange={handleChange} placeholder="Name of recipe" ></input><br/>
        <div className="textfield">
        <label form="ingredents">ingredents</label><br/>
        <input type="text" name="ingredents" value={updateForm.ingredents ? updateForm.ingredents :""}placeholder="ingredents" ></input><br/>
        <label form="prep">prep</label><br/>
        <input type="text" name="prep" value={updateForm.prep ? updateForm.prep :""}placeholder="prep" ></input><br/>
        <label form="cook">cook</label><br/>
        <input type="text" name="cook" value={updateForm.cook ? updateForm.cook :""} placeholder="cooking instruction"></input><br/>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdateForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
{/* End of modal */}


                    <button onClick={()=>updatePost(resp)}>Update</button>
                    <button onClick={() =>deletePost(resp._id)}>Delete</button>
                </div>
            </div>
        
            )}
            
        
        </div>
    </div>
    
    
)
}
export default MyBook;