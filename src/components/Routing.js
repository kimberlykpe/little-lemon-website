import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import BookingForm from '../pages/BookingForm';

export default function Routing() {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/bookingform" element={<BookingForm />}/>
  </Routes>
  );
}
