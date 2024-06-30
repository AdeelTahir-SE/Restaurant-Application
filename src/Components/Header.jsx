import React, { useContext } from 'react'
import "./Header.css"
import logo from "../assets/FoodieHaven.jpeg"
import user from "../assets/male-icon.png"
import cart from "../assets/cart-line-icon.png"

const Header = () => {



 function isClicked(){
}


  return (
    <div className="mainnav">
      <div >
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li><img className='logo' src={logo} alt="Logo" /></li>
            <li className='user' onClick={isClicked}><img className='userimg' src={user} onClick={isClicked}  alt="Sigin in" /></li>
            <li><img className='cart' src={cart} alt="Cart items" /></li>
          </ul>
        </nav>
      </div>
      <div className="pickuptime">
        this is pickup
      </div>
    </div>
  )
}

export default Header
