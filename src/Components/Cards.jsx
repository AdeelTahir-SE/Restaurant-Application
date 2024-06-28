import React from 'react';
import './Cards.css'; // Import your CSS file for styling

const Cards = (props) => {
  return (
    <div className='Card'>
      <img src={props.imgurl} alt="Food image" />
      <h2 className='FoodName'>{props.Name}</h2>
      <p className='FoodDescription'>{props.desc}</p>
      <p className='Price'>{props.price}</p>
    </div>
  );
}

export default Cards;
