import React, { useState } from 'react';
import "./Cartcard.css";
import cardContext from "./Cards.jsx"
const Cartcard = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const submit = (e) => {

    props.func({name:props.data.Name,price:props.data.price,noofitems:counter})
    e.stopPropagation();  // Prevent the click event from bubbling up
    const appElement = document.querySelector(".main-content");
    console.log(appElement);
    if (appElement) {
     if( appElement.style.filter == "blur(5px)")
      document.querySelector(".cartcardcontainer").classList.remove("visible");
     appElement.style.filter = "blur(0px)"
     setCounter(0);
    }
  }

  return (
    <div className="cartcardcontainer" >
      <img src={props.data.imgurl} alt="food image" className='foodimagescart'/>
      <div className="desccart">
        <h3>Food type:{props.data.Name}</h3>
        <h3>Food desciption:</h3>
        <p>{props.data.desc}</p>
      </div>
      <div className="counterclass">
        <button className="btncounter" onClick={decrement}>-</button>
        <span className='countervalue'><pre>   {counter}   </pre></span>
        <button className="btncounter" onClick={increment}>+</button>
      </div>
      <button className='submitcounter' onClick={submit}>Submit</button>
    </div>
  );
};

export default Cartcard;
