import React, { useEffect, useState } from 'react';
import "./Totalprice.css";

const Totalprice = (props) => {
  const [tprice, setTprice] = useState(0);

  useEffect(() => {
    const calculateTotalCost = () => {
      let total = 0;
      props.items.forEach(element => {
        total += parseFloat(element.price*element.noofitems); // Ensure price is a number
      });
      setTprice(total);
    };
    calculateTotalCost();
  }, [props.items]); // Recalculate when props.items changes

  return (
    <div className='totalprice'>
      <h2>Total Cost:</h2>
      <p className='values'>${tprice.toFixed(2)}</p> {/* Display total cost with 2 decimal places */}
      <h2>Number of Items:</h2>
      <p  className='values'>{props.items.length}</p>
      <h2>Items:</h2>
      <ul className='foodlist'>
        {props.items.map((item,i) => (
          <li  key={item.i}>{i}-{item.name}</li>
        ))}
              <button className='submitcounter'>submit</button>

      </ul>
    </div>
  );
};

export default Totalprice;
