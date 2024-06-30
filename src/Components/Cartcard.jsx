import React, { useState } from 'react';
import "./Cartcard.css";
import cardContext from "./Cards.jsx"
const Cartcard = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="cartcardcontainer" >
      <img src={props.data.imgurl} alt="food image" />
      <div className="desccart">
        <h3>Food desc</h3>
        <p>{props.data.desc}</p>
      </div>
      <div className="counterclass">
        <button className="btncounter" onClick={decrement}>-</button>
        <span className='countervalue'><pre>   {counter}   </pre></span>
        <button className="btncounter" onClick={increment}>+</button>
      </div>
      <button className='submitcounter' >Submit</button>
    </div>
  );
};

export default Cartcard;
