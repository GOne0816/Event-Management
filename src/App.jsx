import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './client/Components/NavBar';
import Welcome from './client/Components/Welcome';
import Footer from './client/Components/Footer';
import EventForYou from './client/Components/User/EventForYou';
import Signup from './client/Components/User/signup';
import CreateEvent from './client/Components/User/CreateEvent';
import About from './client/Components/pages/About';

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
