import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { User, FoodItem } from './models/Schema.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Restaurant_app");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connectDB();

// Sample data for menu items
const menuData = [
  {
    "key": 1,
    "type": "Burgers",
    "imgurl": "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg",
    "Name": "Classic Beef Burger",
    "desc": "Juicy beef patty with lettuce, tomatoes, onions, pickles, and special sauce in a sesame seed bun.",
    "price": 8.99
  },
  {
    "key": 2,
    "type": "Burgers",
    "imgurl": "https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_1280.jpg",
    "Name": "Cheeseburger",
    "desc": "Delicious beef patty with melted cheese, lettuce, tomatoes, and pickles in a sesame seed bun.",
    "price": 9.49
  },
  {
    "key": 3,
    "type": "Pizzas",
    "imgurl": "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    "Name": "Pepperoni Pizza",
    "desc": "Classic pizza topped with pepperoni slices and melted mozzarella cheese.",
    "price": 10.99
  },
  {
    "key": 4,
    "type": "Pizzas",
    "imgurl": "https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg",
    "Name": "Margherita Pizza",
    "desc": "Traditional pizza topped with fresh tomatoes, basil, and mozzarella cheese.",
    "price": 9.99
  },
  {
    "key": 5,
    "type": "Tacos",
    imgurl: "https://cdn.pixabay.com/photo/2019/06/20/21/15/taco-4288033_1280.jpg",
    "Name": "Beef Taco",
    "desc": "Corn tortilla filled with seasoned ground beef, lettuce, cheese, and salsa.",
    "price": 3.99
  },
  {
    "key": 6,
    "type": "Tacos",
    imgurl: "https://cdn.pixabay.com/photo/2022/11/28/20/05/taco-7623097_960_720.jpg",
    "Name": "Chicken Taco",
    "desc": "Soft tortilla filled with grilled chicken, lettuce, sour cream, and tomatoes.",
    "price": 4.49
  },
  {
    "key": 7,
    "type": "Nachos",
    imgurl: "https://cdn.pixabay.com/photo/2017/08/02/12/21/nacho-2571340_1280.jpg",
    "Name": "Loaded Nachos",
    "desc": "Crispy tortilla chips topped with melted cheese, jalapenos, beans, guacamole, and sour cream.",
    "price": 7.99
  },
  {
    "key": 8,
    "type": "Nachos",
    "imgurl": "https://cdn.pixabay.com/photo/2019/09/05/19/58/nachos-4454941_960_720.jpg",
    "Name": "Cheese Nachos",
    "desc": "Simple yet delicious tortilla chips covered with melted cheese.",
    "price": 5.99
  },
  {
    "key": 9,
    "type": "Sides",
    "imgurl": "https://cdn.pixabay.com/photo/2020/06/23/14/33/french-fries-5332766_1280.jpg",
    "Name": "French Fries",
    "desc": "Golden and crispy fries served with ketchup.",
    "price": 2.99
  },
  {
    "key": 10,
    "type": "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2015/04/22/16/07/fried-735004_960_720.jpg",
    "Name": "Onion Rings",
    "desc": "Battered and deep-fried onion rings served with dipping sauce.",
    "price": 3.49
  },
  {
    "key": 11,
    "type": "Ramen",
    "imgurl": "https://cdn.pixabay.com/photo/2019/11/23/15/30/ramen-4647411_960_720.jpg",
    "Name": "Shoyu Ramen",
    "desc": "Japanese noodle soup with soy sauce broth, sliced pork, eggs, and green onions.",
    "price": 11.99
  },
  {
    "key": 12,
    "type": "Ramen",
    "imgurl": "https://cdn.pixabay.com/photo/2022/05/10/18/50/ramen-7187809_960_720.jpg",
    "Name": "Miso Ramen",
    "desc": "Ramen noodles in a savory miso broth with tofu, mushrooms, and seaweed.",
    "price": 10.99
  },
  {
    "key": 13,
    "type": "Dessert",
    "imgurl": "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg",
    "Name": "Chocolate Cake",
    "desc": "Rich and moist chocolate cake with layers of creamy chocolate frosting.",
    "price": 4.99
  },
  {
    "key": 14,
    "type": "Dessert",
    imgurl: "https://cdn.pixabay.com/photo/2023/02/17/16/24/cake-7796383_960_720.jpg",
    "Name": "Cheesecake",
    "desc": "Smooth and creamy cheesecake with a graham cracker crust.",
    "price": 5.49
  },
  {
    "key": 15,
    "type": "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2017/09/12/04/42/soft-drink-2741251_960_720.jpg",
    "Name": "Soda",
    "desc": "Refreshing carbonated beverage available in various flavors.",
    "price": 1.99
  },
  {
    "key": 16,
    "type": "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2022/04/11/08/52/iced-tea-7125271_960_720.jpg",
    "Name": "Iced Tea",
    "desc": "Chilled tea served with ice cubes and lemon slices.",
    "price": 2.49
  },
  {
    "key": 17,
    "type": "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_960_720.jpg",
    "Name": "Caesar Salad",
    "desc": "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
    "price": 6.49
  },
  {
    key: 18,
    type: "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2017/06/22/14/20/salad-2430919_960_720.jpg",
    Name: "Greek Salad",
    desc: "Fresh salad with tomatoes, cucumbers, onions, olives, feta cheese, and Greek dressing.",
    price: 7.49
  },
  {
    key: 19,
    type: "Sides",
    imgurl: "https://cdn.pixabay.com/photo/2015/05/31/13/02/salad-791643_960_720.jpg",
    Name: "Spinach Salad",
    desc: "Healthy salad with fresh spinach leaves, bacon bits, sliced eggs, and vinaigrette dressing.",
    price: 5.99
  },
  {
    key: 20,
    type: "Burgers",
    imgurl: "https://cdn.pixabay.com/photo/2017/04/24/22/12/asparagus-2258013_960_720.jpg",
    Name: "Veggie Burger",
    desc: "Grilled veggie patty with lettuce, tomatoes, onions, pickles, and special sauce in a sesame seed bun.",
    price: 7.99
  },
  {
    key: 21,
    type: "Pizzas",
    imgurl: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
    Name: "Vegetarian Pizza",
    desc: "Pizza topped with assorted vegetables and melted mozzarella cheese.",
    price: 9.99
  },
  {
    key: 22,
    type: "Tacos",
    imgurl: "https://cdn.pixabay.com/photo/2015/11/02/20/27/taco-1018962_1280.jpg",
    Name: "Fish Taco",
    desc: "Crispy fish fillet with cabbage slaw, avocado, and chipotle mayo in a soft tortilla.",
    price: 5.99
  },
 

];

// Endpoint to handle user registration
app.post('/Signin', async (req, res) => {
  try {
    const { Name, Email, Password, PhoneNumber } = req.body;
    const newUser = new User({ Name: Name, Email, Password, Phone: PhoneNumber });
    await newUser.save();
    console.log("User registered:", newUser);
    res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ msg: 'Failed' });
  }
});
app.post('/Login', async (req, res) => {
  try {
    const { Email, Password} = req.body;
const Userlogged =await User.findOne({Email:Email,Password:Password})
if(Userlogged){
    res.status(200).json(Userlogged);
  }
  else if (!Userlogged){
    res.status(404).json({msg:"Failed"})
  }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Endpoint to fetch menu items
app.get('/menu', async (req, res) => {
  try {
    
    const menuItems = await FoodItem.find({});
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
