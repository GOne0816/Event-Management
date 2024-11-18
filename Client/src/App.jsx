import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './client/Pages/NavBar';
import Welcome from './client/Pages/Welcome';
import Footer from './client/Pages/Footer';
import EventForYou from './client/Pages/Pages Components/EventForYou';
import Signup from './client/Pages/Pages Components/signup';
import CreateEvent from './client/Pages/Pages Components/CreateEvent';
import About from './client/Pages/Pages Components/About';
import Careers from './client/Pages/Pages Components/Careers';
import TermsOfService from './client/Pages/Pages Components/Terms_of_Services';
import Support from './client/Pages/Pages Components/Support';
import Privacy from './client/Pages/Pages Components/Privacy';
import ContactUs from './client/Pages/Pages Components/Contact';

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
        <Route path="/careers" element={<Careers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms+of+service" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact+us" element={<ContactUs />} />
      </Routes>
      <Footer />
      </div>
  );
};

export default App;
