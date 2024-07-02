import React, { createContext, useEffect, useState } from "react";
import Cards from "./Components/Cards";
import "./App.css";
import Signin from "./Components/Signin";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cartcard from "./Components/Cartcard.jsx";
import Totalprice from "./Components/Totalprice.jsx";
import { createPortal } from "react-dom";
import backgroundimage from "./assets/backgroundfood.jpeg";
function App() {
  const [Data, setData] = useState(null);
  const [cartdata, setCartdata] = useState({});
  const [items, setitems] = useState([]);
  const [Userdata, setUserdata] = useState(0);

  useEffect(() => {
    // Example fetch data from API
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
        


  const addToCart = (item) => {
    setCartdata(item);
    console.log(item);
  };
  const addtototalitems = (item) => {
    setitems((prevItems) => [
      ...prevItems,
      {
        name: item.name,
        price: item.price,
        noofitems: item.noofitems,
      },
    ]);
    console.log(items);
  };
  if (
    document.querySelector(".Container") ||
    document.querySelector(".cartcardcontainer") ||
    document.querySelector(".totalprice")
  ) {
    if (
      document.querySelector(".main-content") &&
      (document.querySelector(".Container").classList.contains("visible") ||
        document
          .querySelector(".cartcardcontainer")
          .classList.contains("visible"))
    ) {
      document.querySelector(".main-content").addEventListener("click", () => {
        if (
          document.querySelector(".main-content").style.filter == "blur(5px)"
        ) {
          document.querySelector(".main-content").style.filter = "blur(0px)";
        }
        if (
          document.querySelector(".Container").classList.contains("visible")
        ) {
          document.querySelector(".Container").classList.remove("visible");
        }
        if (
          document
            .querySelector(".cartcardcontainer")
            .classList.contains("visible")
        ) {
          document
            .querySelector(".cartcardcontainer")
            .classList.remove("visible");
        }
        if (
          document.querySelector(".totalprice").classList.contains("visible")
        ) {
          document.querySelector(".totalprice").classList.toggle("visible");
        }
      });
    }
  }

  const modalRoot = document.getElementById("modal");

  return (
    <div
      className={"main-content"}
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <Header toatlitems={items} Userdata={Userdata} />
      <Navbar />
      {modalRoot &&
        createPortal(
          <Cartcard
            data={cartdata}
            func={(cartdata) => {
              addtototalitems(cartdata);
            }}
          />,
          document.getElementById("modal")
        )}
      {modalRoot &&
        createPortal(
          <Signin
            User={(data) => {
              setUserdata(data);
            }}
          />,
          document.getElementById("modal")
        )}
      {modalRoot &&
        createPortal(
          <Totalprice items={items} />,
          document.getElementById("modal")
        )}

      {[
        "Tacos",
        "Nachos",
        "Sides",
        "Ramen",
        "Dessert",
        "Pizzas",
        "Burgers",
      ].map((category) => (
        <React.Fragment key={category}>
          <h2 id={category}>{category}</h2>
          <div className="food">
            {Data &&
              Data.map(
                (data) =>
                  data.type === category && (
                    <Cards
                      key={data.key}
                      imgurl={data.imgurl}
                      Name={data.Name}
                      desc={data.desc}
                      price={data.price}
                      addToCart={() => addToCart(data)} // Pass addToCart function as prop
                    />
                  )
              )}
          </div>
        </React.Fragment>
      ))}
      <Footer />
    </div>
  );
}

export default App;
