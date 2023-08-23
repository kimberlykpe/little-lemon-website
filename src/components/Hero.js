import React from "react";
const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main-body">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <a href to="/reservations">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </a>
        </div>

        <div className="featured">
          <img src={require('../images/restaurantFood.jpg')} alt="restaurant_food" />
        </div>
      </div>
    </>
  );
};

export default Hero;
