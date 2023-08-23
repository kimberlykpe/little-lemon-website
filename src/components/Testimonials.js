import ratings from "../images/5_star.png";
import profile1 from "../images/customer_1.jpeg";
import profile2 from "../images/customer_2.jpeg";
import profile3 from "../images/customer_3.jpeg";
import profile4 from "../images/customer_4.jpg";
import React from 'react';

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <h2>Myrene Z.</h2>
            <p>"Really enjoyed the atmosphere."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <h2>Logan R.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <h2>James T.</h2>
            <p>"Customer service was great."</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <h2>Jessica P.</h2>
            <p>"Go in for their Happy Hour Specials!"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
