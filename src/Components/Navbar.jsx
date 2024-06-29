import React from 'react'
import "./Navbar.css"
const Navbar = () => {
function clicked(e){
console.log(e.target.innerHTML)
}
  return (
   <nav className='secnav'>
    <ul onClick={clicked}>
<a  href="#Tacos"><li>Tacos</li></a>
<a href='#Nachos'><li>Nachos</li></a>
<a href='#Sides'><li>Sides</li></a>
<a href='#Ramen'><li>Ramen</li></a>
<a href='#Dessert'><li>Dessert</li></a>
<a href='#Pizzas'><li>Pizzas</li></a>
<a href='#Burgers'><li>Burgers</li></a>
    </ul>
   </nav>
  )
}

export default Navbar
