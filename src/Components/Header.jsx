import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../assets/FoodieHaven.jpeg';
import user from '../assets/male-icon.png';
import cart from '../assets/cart-line-icon.png';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const visibility = (e) => {
    e.stopPropagation();  // Prevent the click event from bubbling up
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
      appElement.style.filter = "blur(5px)";
      document.querySelector(".Container").classList.add("visible");
    }
  }

  const visibility_totalitems = (e) => {
    e.stopPropagation();
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
      appElement.style.filter = "blur(5px)";
      document.querySelector(".totalprice").classList.add("visible");
    }
  }

  // Ensure props.Userdata exists before trying to parse it
  const userName = props.Userdata ? JSON.parse(props.Userdata).Name : "Sign in";

  return (
    <div className="mainnav">
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/"><img className='logo' src={logo} alt="Logo" /></Link></li>
            <li className='user' onClick={visibility}>
              <img className='userimg' src={user} alt="Sign in" />
              <p>{userName}</p>
            </li>
            <li onClick={visibility_totalitems}><img className='cart' src={cart} alt="Cart items"  /></li>
          </ul>
        </nav>
      </div>
      <div className="pickuptime">
        this is pickup
      </div>
    </div>
  );
}

export default Header;
