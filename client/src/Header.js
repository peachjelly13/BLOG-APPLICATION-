
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
  const [username,setUsername] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUsername(userInfo.username);

      });

    });
  },[]);
  return (
    <header>
        <Link to ="/" className="logo">Blogs</Link>
        <nav>
          {username &&(
            <>
            <Link to="/create">Create New Blog</Link>
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
