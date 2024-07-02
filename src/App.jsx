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
import backgroundimage from "./assets/backgroundfood.jpeg"

function App() {
  const [Data, setData] = useState(null);
  const [cartdata, setCartdata] = useState({});
  const[items,setitems]=useState([]);
  const[Userdata,setUserdata]=useState(0);

  useEffect(() => {
setData([
  {
    "key": "1",
    "type": "Tacos",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Chicken Taco",
    "desc": "Delicious chicken taco with fresh ingredients.",
    "price": "3.99"
  },
  {
    "key": "17",
    "type": "Tacos",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Chicken Taco",
    "desc": "Delicious chicken taco with fresh ingredients.",
    "price": "3.99"
  },
  {
    "key": "18",
    "type": "Tacos",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Chicken Taco",
    "desc": "Delicious chicken taco with fresh ingredients.",
    "price": "3.99"
  },
  {
    "key": "2",
    "type": "Nachos",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Cheesy Nachos",
    "desc": "Crispy nachos topped with melted cheese.",
    "price": "4.99"
  },
  {
    "key": "19",
    "type": "Nachos",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Cheesy Nachos",
    "desc": "Crispy nachos topped with melted cheese.",
    "price": "4.99"
  },
  {
    "key": "20",
    "type": "Nachos",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Cheesy Nachos",
    "desc": "Crispy nachos topped with melted cheese.",
    "price": "4.99"
  },
  {
    "key": "3",
    "type": "Sides",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Fries",
    "desc": "Crispy golden fries with a hint of salt.",
    "price": "2.99"
  },
  {
    "key": "21",
    "type": "Sides",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Fries",
    "desc": "Crispy golden fries with a hint of salt.",
    "price": "2.99"
  },
  {
    "key": "22",
    "type": "Sides",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Fries",
    "desc": "Crispy golden fries with a hint of salt.",
    "price": "2.99"
  },
  {
    "key": "4",
    "type": "Ramen",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Spicy Ramen",
    "desc": "Hot and spicy ramen with rich broth.",
    "price": "7.99"
  },
  {
    "key": "5",
    "type": "Dessert",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Chocolate Cake",
    "desc": "Rich chocolate cake with a creamy texture.",
    "price": "5.99"
  },
  {
    "key": "6",
    "type": "Pizzas",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Pepperoni Pizza",
    "desc": "Classic pepperoni pizza with a crispy crust.",
    "price": "8.99"
  },
  {
    "key": "7",
    "type": "Ramen",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Spicy Ramen",
    "desc": "Hot and spicy ramen with rich broth.",
    "price": "7.99"
  },
  {
    "key": "8",
    "type": "Ramen",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Chicken Ramen",
    "desc": "Flavorful chicken ramen with tender chicken slices.",
    "price": "7.49"
  },
  {
    "key": "9",
    "type": "Dessert",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Chocolate Cake",
    "desc": "Rich chocolate cake with a creamy texture.",
    "price": "5.99"
  },
  {
    "key": "10",
    "type": "Dessert",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Ice Cream",
    "desc": "Creamy vanilla ice cream with chocolate syrup.",
    "price": "3.99"
  },
  {
    "key": "11",
    "type": "Pizzas",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Pepperoni Pizza",
    "desc": "Classic pepperoni pizza with a crispy crust.",
    "price": "8.99"
  },
  {
    "key": "12",
    "type": "Pizzas",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Veggie Pizza",
    "desc": "Pizza topped with a variety of fresh vegetables.",
    "price": "7.99"
  },
  {
    "key": "13",
    "type": "Burgers",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Cheeseburger",
    "desc": "Juicy cheeseburger with fresh lettuce and tomato.",
    "price": "6.99"
  },
  {
    "key": "14",
    "type": "Burgers",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Bacon Burger",
    "desc": "Burger with crispy bacon and melted cheese.",
    "price": "7.49"
  },
  {
    "key": "15",
    "type": "Burgers",
    "imgurl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "Name": "Bacon Burger",
    "desc": "Burger with crispy bacon and melted cheese.",
    "price": "7.49"
  },
  {
    "key": "16",
    "type": "Burgers",
    "imgurl": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "Name": "Bacon Burger",
    "desc": "Burger with crispy bacon and melted cheese.",
    "price": "7.49"
  }
]



)
  }, []);

  const addToCart = (item) => {
    setCartdata(item);
    console.log(item)
  };
  const addtototalitems = (item) => {
    setitems((prevItems) => [
      ...prevItems,
      {
        name: item.name,
        price: item.price,
        noofitems:item.noofitems
      },
    ]);
    console.log(items);
  };
  if(document.querySelector(".Container")||document.querySelector(".cartcardcontainer")||document.querySelector(".totalprice")){
  if(document.querySelector(".main-content")&&(document.querySelector(".Container").classList.contains("visible")||document.querySelector(".cartcardcontainer").classList.contains("visible"))){
    document.querySelector(".main-content").addEventListener("click",()=>{
      if(document.querySelector(".main-content").style.filter == "blur(5px)"){
        document.querySelector(".main-content").style.filter = "blur(0px)"
       }
        if(document.querySelector(".Container").classList.contains("visible")){
          document.querySelector(".Container").classList.remove("visible")
        }
        if(document.querySelector(".cartcardcontainer").classList.contains("visible")){
          document.querySelector(".cartcardcontainer").classList.remove("visible")
        }
        if(document.querySelector(".totalprice").classList.contains("visible")){
          document.querySelector(".totalprice").classList.remove("visible")
        }
       
    })
    }
  }

  const modalRoot = document.getElementById("modal");

  return (
    <div className={"main-content"}style={{ backgroundImage: `url(${backgroundimage})` }}>
      <Header toatlitems={items} Userdata={Userdata}/>
      <Navbar />
      {modalRoot && createPortal(<Cartcard data={cartdata} func = {(cartdata)=>{addtototalitems(cartdata)}}/>, document.getElementById("modal"))}
      { modalRoot&& createPortal(<Signin  User={(data)=>{setUserdata(data)}}/>, document.getElementById("modal"))}
      { modalRoot&& createPortal(<Totalprice items={items}/>, document.getElementById("modal"))}

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
