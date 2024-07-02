import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import sliderurl1 from "../../assets/backgroundfood.jpeg";
import sliderurl2 from "../../assets/FoodieHaven.jpeg";
import sliderurl3 from "../../assets/foodiehaven2.jpeg";
import "./Home.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderImages = [
    {
      url: sliderurl1,
      alt: 'Delicious food 1',
      caption: 'Discover the best restaurants in your area.'
    },
    {
      url: sliderurl2,
      alt: 'Delicious food 2',
      caption: 'Personalized recommendations for you.'
    },
    {
      url: sliderurl3,
      alt: 'Delicious food 3',
      caption: 'Exclusive deals and offers.'
    }
  ];

  return (
    <div className="Homecontainer">
      <h1>Welcome to Foodie Haven</h1>
      <div className="slider-wrapper">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={image.alt} style={{ width: '40%', height: 'auto', }} />
              <p>{image.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
      <p>
        Foodie Haven is your ultimate dining companion app, designed to elevate your culinary experiences! Whether you're a local food lover or a traveler exploring new tastes, Foodie Haven has you covered.
      </p>
      <h2>Discover and Explore</h2>
      <p>
        Discover the best restaurants in your area with just a few taps. Browse through a curated list of top-rated eateries, read authentic reviews, and explore mouth-watering menus to decide where you want to dine next.
      </p>
      <h2>Personalized Recommendations</h2>
      <p>
        Get personalized restaurant recommendations based on your taste preferences and dining history. Never miss out on hidden gems or new culinary trends with Foodie Haven's intelligent algorithm.
      </p>
      <h2>Real-time Reservations</h2>
      <p>
        Make real-time reservations at your favorite restaurants directly through the app. Check availability, choose your dining time, and receive instant confirmation hassle-free.
      </p>
      <h2>Exclusive Deals and Offers</h2>
      <p>
        Enjoy exclusive deals and discounts at partner restaurants. Save money while indulging in delectable dishes. Keep an eye on the offers section to make the most of your dining experiences.
      </p>
      <h2>Interactive Menus</h2>
      <p>
        Explore interactive menus with high-quality images and detailed descriptions of each dish. Know the ingredients, preparation methods, and recommended wine pairings for an enhanced dining experience.
      </p>
      <h2>User-friendly Interface</h2>
      <p>
        Foodie Haven features a user-friendly interface designed for simplicity. Navigate through various sections, filter search results effortlessly, and find exactly what you're looking for with ease.
      </p>
      <h2>Community and Reviews</h2>
      <p>
        Join a community of food enthusiasts! Share your dining experiences, leave reviews, and read genuine feedback from other foodies to make informed decisions about where to dine.
      </p>
      <h2>Order and Delivery</h2>
      <p>
        Can't visit the restaurant? No problem! Order your favorite dishes for delivery right from the app. Track your order in real-time and enjoy a delicious meal in the comfort of your home.
      </p>
      <h2>Events and Reservations</h2>
      <p>
        Stay updated with the latest events, special nights, and promotions at your favorite restaurants. Book your spot for exclusive dining experiences tailored just for you.
      </p>
      <h2>Download Foodie Haven Today!</h2>
      <p>
        Ready to embark on a culinary journey like never before? Download Foodie Haven now and discover, book, and enjoy the best dining experiences wherever you go.
      </p>
    </div>
  );
};

export default Home;
