import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';
import EventForYou from './Components/User/EventForYou';
import Signup from './Components/User/signup';
import CreateEvent from './Components/User/CreateEvent';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/eventForYou" element={<EventForYou />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
  );
};

export default App;
