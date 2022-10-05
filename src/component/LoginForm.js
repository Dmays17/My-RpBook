import React from 'react';
//import { Form } from 'react-router-dom';

function LoginForm(){

    return(
       <div>
        <h1>sfsf</h1>
        <form>

        <div className='form-inner'>
            <h2>Login</h2>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name'/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password'/>
            </div>

        </form>
        </div>
    )
    }
    export default LoginForm;