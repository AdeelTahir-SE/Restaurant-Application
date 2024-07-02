import React, { useContext } from 'react'
import "./Header.css"
import logo from "../assets/FoodieHaven.jpeg"
import user from "../assets/male-icon.png"
import cart from "../assets/cart-line-icon.png"

const Header = (props) => {




  const visibility = (e) => {
    e.stopPropagation();  // Prevent the click event from bubbling up
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
      appElement.style.filter = "blur(5px)";
      document.querySelector(".Container").classList.add("visible")
    }
  }

  const visibility_totalitems=(e)=>{
    e.stopPropagation();
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
      appElement.style.filter = "blur(5px)";
      document.querySelector(".totalprice").classList.add("visible")
    }
  }

  return (
    <div className="mainnav">
      <div >
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li><img className='logo' src={logo} alt="Logo" /></li>
            <li className='user' onClick={visibility}><img className='userimg' src={user}  alt="Sigin in" /><p>{JSON.parse(props.Userdata).UserName?JSON.parse(props.Userdata).UserName:"Sign in"}</p></li>

            <li><img className='cart' src={cart} alt="Cart items" onClick={visibility_totalitems}/></li>
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
