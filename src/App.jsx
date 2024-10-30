import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import EventForYou from './Components/User/EventForYou';
import Signup from './Components/User/signup';
import CreateEvent from './Components/User/CreateEvent';
import About from './Components/About';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/eventForYou" element={<EventForYou />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      </div>
  );
};

export default App;
