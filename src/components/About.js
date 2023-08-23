import restaurantChefs from "../images/Mario and Adrian b.jpg";
import restaurant from "../images/restaurant.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>About Us</h4>
          <h5>Est. 1999</h5>
          <p>
          Welcome to the Little Lemon Restaurant, a hidden gem nestled in the heart of the city. 
            As you step through our doors, prepare to embark on a delightful culinary journey inspired by the vibrant 
            flavors of the Mediterranean. At the Little Lemon, our talented chefs are passionate about crafting authentic 
            Mediterranean dishes using the finest, locally sourced ingredients. With a focus on capturing the essence of 
            Mediterranean cuisine, our menu showcases a harmonious blend of flavors, colors, and textures that will transport 
            you to the sun-drenched shores of Greece, Italy, and beyond.
          </p>
        </div>

        <div className="owners">
          <img id="chefs" src={restaurantChefs} alt="male owner" />
          <img id="restaurant" src={restaurant} alt="female owner" />
        </div>
      </div>
    </>
  );
};

export default About;
