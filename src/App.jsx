import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './client/Pages/NavBar';
import Welcome from './client/Pages/Welcome';
import Footer from './client/Pages/Footer';
import EventForYou from './client/Pages/Pages Components/EventForYou';
import Signup from './client/Pages/Pages Components/signup';
import CreateEvent from './client/Pages/Pages Components/CreateEvent';
import About from './client/Pages/Pages Components/About';

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
