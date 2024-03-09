import React from 'react'
import { Header } from '../Header';

export const LoginPage = () => {
  return (
    <>
    <form className="login">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
    </form>
    
    </>
  )
}

export default LoginPage;