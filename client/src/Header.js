
import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import UserContext from './UserContext';

export const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  
  useEffect(()=>{
    fetch('http://localhost:2000/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      });
    });
  },[]);

  function logout(){
    fetch('http://localhost:2000/logout',{
      credentials:'include',
      method:'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <header>
        <Link to ="/" className="logo">Your Memoir</Link>
        <nav>
          {username &&(
            <>
            <Link to="/create">Save a Memory</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username &&(
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>

          )}
        
         
        </nav>
      </header>
  )
}
