
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { BookingForm } from './pages/BookingForm';
import Specials from './components/Specials';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Routing from './components/Routing';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
