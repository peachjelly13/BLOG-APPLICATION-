import React, { useState } from 'react'
import Post from '../Post';

export const RegisterPage = () => {
  const[username,setUsername] = useState(''); //use state is used to update the current value
  const[password,setPassword] = useState('');
  //A reason we are using useState here is because we will be updating our username
  //And our password
  async function register(ev){
    ev.preventDefault();
  
      const response = await fetch('http://localhost:5000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'}
    });
    if(response.status === 200){
      alert('Registration Successful');
    }
    else{
      alert('Registration Failed')
    }
  }

  return (
    <>
    <form className='register' onSubmit={register}>
        <input type="text" 
        placeholder="username"
        value = {username}
        onChange={ev=>setUsername(ev.target.value)}
        />
        <input type="password"
         placeholder='password'
         value = {password}
         onChange={ev=>setPassword(ev.target.value)}
         />
        <button>Register</button>
    </form>
    
    </>
    
  )
}

export default RegisterPage
