import React, { createContext, useEffect, useState } from "react";
import Cards from "./Components/Cards";
import "./App.css";
import Signin from "./Components/Signin";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { UserContext } from "./Context/Usercontext.js";
import { createPortal } from "react-dom";

function App() {
  const [Data, setData] = useState(null);
  const [isSigninclicked, setSigninclicked] = useState(false);
  useEffect(() => {
    setData([
      {
        key: "1",
        type: "Tacos",
        imgurl: "url_to_tacos_image",
        Name: "Chicken Taco",
        desc: "Delicious chicken taco with fresh ingredients.",
        price: "3.99",
      },
      {
        key: "2",
        type: "Nachos",
        imgurl: "url_to_nachos_image",
        Name: "Cheesy Nachos",
        desc: "Crispy nachos topped with melted cheese.",
        price: "4.99",
      },
      {
        key: "3",
        type: "Sides",
        imgurl: "url_to_sides_image",
        Name: "Fries",
        desc: "Crispy golden fries with a hint of salt.",
        price: "2.99",
      },
      {
        key: "4",
        type: "Ramen",
        imgurl: "url_to_ramen_image",
        Name: "Spicy Ramen",
        desc: "Hot and spicy ramen with rich broth.",
        price: "7.99",
      },
      {
        key: "5",
        type: "Dessert",
        imgurl: "url_to_dessert_image",
        Name: "Chocolate Cake",
        desc: "Rich chocolate cake with a creamy texture.",
        price: "5.99",
      },
      {
        key: "6",
        type: "Pizzas",
        imgurl: "url_to_pizzas_image",
        Name: "Pepperoni Pizza",
        desc: "Classic pepperoni pizza with a crispy crust.",
        price: "8.99",
      },
      {
        key: "7",
        type: "Ramen",
        imgurl: "url_to_ramen_image",
        Name: "Spicy Ramen",
        desc: "Hot and spicy ramen with rich broth.",
        price: "7.99",
      },
      {
        key: "8",
        type: "Ramen",
        imgurl: "url_to_chicken_ramen_image",
        Name: "Chicken Ramen",
        desc: "Flavorful chicken ramen with tender chicken slices.",
        price: "7.49",
      },
      {
        key: "9",
        type: "Dessert",
        imgurl: "url_to_dessert_image",
        Name: "Chocolate Cake",
        desc: "Rich chocolate cake with a creamy texture.",
        price: "5.99",
      },
      {
        key: "10",
        type: "Dessert",
        imgurl: "url_to_ice_cream_image",
        Name: "Ice Cream",
        desc: "Creamy vanilla ice cream with chocolate syrup.",
        price: "3.99",
      },
      {
        key: "11",
        type: "Pizzas",
        imgurl: "url_to_pizzas_image",
        Name: "Pepperoni Pizza",
        desc: "Classic pepperoni pizza with a crispy crust.",
        price: "8.99",
      },
      {
        key: "12",
        type: "Pizzas",
        imgurl: "url_to_veggie_pizza_image",
        Name: "Veggie Pizza",
        desc: "Pizza topped with a variety of fresh vegetables.",
        price: "7.99",
      },
      {
        key: "13",
        type: "Burgers",
        imgurl: "url_to_cheeseburger_image",
        Name: "Cheeseburger",
        desc: "Juicy cheeseburger with fresh lettuce and tomato.",
        price: "6.99",
      },
      {
        key: "14",
        type: "Burgers",
        imgurl: "url_to_bacon_burger_image",
        Name: "Bacon Burger",
        desc: "Burger with crispy bacon and melted cheese.",
        price: "7.49",
      },
      {
        key: "15",
        type: "Burgers",
        imgurl: "url_to_bacon_burger_image",
        Name: "Bacon Burger",
        desc: "Burger with crispy bacon and melted cheese.",
        price: "7.49",
      },
      {
        key: "16",
        type: "Burgers",
        imgurl: "url_to_bacon_burger_image",
        Name: "Bacon Burger",
        desc: "Burger with crispy bacon and melted cheese.",
        price: "7.49",
      },
    ]);
  }, []);

  return (
    <UserContext.Provider value={{ isSigninclicked, setSigninclicked }}>
      <div
        className={
          isSigninclicked ? "blur main-content" : "no-blur main-content"
        }
      >
        <Header />
        <Navbar />

        {isSigninclicked &&
          createPortal(<Signin />, document.querySelector("#Signinmodal"))}

        {/* Render food categories */}
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
                      />
                    )
                )}
            </div>
          </React.Fragment>
        ))}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
