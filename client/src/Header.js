import React from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <Link to ="/" className="logo">Blogs</Link>
        <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
         
        </nav>
      </header>
  )
}
