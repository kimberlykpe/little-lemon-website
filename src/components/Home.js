import React from 'react';
import "../App.css";
import Hero from './Hero';
import About from './About';
import Specials from './Specials';
import Testimonials from './Testimonials';
function Home() {
    return (
      <div className='Home'>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </div>
    );
  }
  
  export default Home;