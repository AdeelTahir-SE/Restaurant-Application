import React from 'react';
import './About.css';
import backgroundimage from "../../assets/backgroundfood.jpeg"
const About = () => {
  return (
    <div className="About" style={{ backgroundImage: `url(${backgroundimage})` }}>
      <div className="about-header">
        <h1>About Foodie Haven</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to Foodie Haven, your go-to destination for the best culinary experiences! 
          At Foodie Haven, we believe that food is more than just sustenance; it is an art, a passion, and a way to bring people together. 
          Our mission is to provide our customers with an unforgettable dining experience through delicious meals and exceptional service.
        </p>
      </div>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
          <p>John is a passionate foodie and entrepreneur with over 20 years of experience in the culinary industry. His vision for Foodie Haven is to create a space where food lovers can come together and enjoy the best dishes from around the world.</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Head Chef</p>
          <p>Jane is a culinary genius who has worked in top restaurants across the globe. Her innovative and delicious recipes are at the heart of what makes Foodie Haven special. She is dedicated to bringing unique flavors and high-quality ingredients to every dish.</p>
        </div>
        <div className="team-member">
          <h3>Emily Johnson</h3>
          <p>Marketing Director</p>
          <p>Emily is the creative force behind Foodie Haven's brand. With her extensive experience in marketing and her love for food, she ensures that our story reaches food enthusiasts everywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
