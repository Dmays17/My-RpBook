import React, {useState} from 'react';
import {useNavigate}from "react-router-dom"

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({name: "", username: "", password: ""});
  const[goToHome,setGoToHome]= useState(false)
  const navigate=useNavigate()
    const submitHandler = e => {
      e.preventDefault();

      Login(details);
    }

    if(goToHome){
      navigate("/MyBook")
      
    }
      const handleClick = (e) => {
      e.preventDefault()  
      setGoToHome(true)
  }

  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(error != "") ? (<div className='error'>{error}</div>) : "" }
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input type='username' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
              </div>
                <input onClick={handleClick} type="submit" value="Login" />
        </div>
    </form>
  )
}

export default LoginForm