import React from 'react'
import "./Navbar.css"
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
function clicked(e){
console.log(e.target.innerHTML)
}
  return (
   <nav>
    <ul onClick={clicked}>
<a  href="#"><li>Tacos</li></a>
<a href='#'><li>Nachos</li></a>
<a href='#'><li>Sides</li></a>
<a href='#'><li>Ramen</li></a>
<a href='#'><li>Desert</li></a>
<a href='#'><li>Pizzas</li></a>
    </ul>
   </nav>
  )
}

export default Navbar
