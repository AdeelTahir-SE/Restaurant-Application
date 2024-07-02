import React, { createContext } from 'react';
import './Cards.css'; // Import your CSS file for styling
const Cards = (props) => {

  const visibility = (e) => {
    props.addToCart();
    e.stopPropagation();  // Prevent the click event from bubbling up
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
      appElement.style.filter = "blur(5px)";
      document.querySelector(".cartcardcontainer").classList.add("visible")
    }

  };
  return (
    <div className='Card' onClick={visibility}>
      <div className="info">
       <h2 className='FoodName'>{props.Name}</h2>
      <p className='FoodDescription'>{props.desc}</p>
      <p className='Price'>{props.price}</p>
      </div>
      <div className="image">
      <img src={props.imgurl} alt="Food image" className='foodimages' />
      </div>
    </div>
  );
}

export default Cards;
