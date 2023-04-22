import React from 'react'
import {Link} from "react-router-dom" 
export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
           <li><Link className='link' to={"/"}>Mountains</Link></li>
           <li><Link className='link' to={"/beaches"}>Beaches</Link></li>
           <li><Link className='link' to={"/birds"}>Birds</Link></li>
           <li><Link className='link' to={"/food"}>Food</Link></li>
        </ul>
    </div>
  )
}
