import React from "react";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Contact from "./Pages Components/Contact";
import Hero from "../components/ui/BackgroundBeam";
import Categ from "../components/ui/Category";
import { Link } from "react-router-dom";

const Welcome = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="text-3xl text-blue-600" />,
      title: "Easy Scheduling",
      details:
        "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="text-3xl text-green-600" />,
      title: "Attendee Management",
      details:
        "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-3xl text-red-600" />,
      title: "Venue Coordination",
      details:
        "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="text-3xl text-purple-600" />,
      title: "Analytics & Reporting",
      details:
        "Gain valuable insights with comprehensive event analytics and customizable reports.",
    },
  ];

  const eventCards = [
    {
      id: 1,
      title: "Event 1",
      date: "March 15-17, 2024",
      location: "Uttar Pradesh, IN",
    },
    { id: 2, title: "Event 2", date: "July 8-10, 2024", location: "Assam, IN" },
    {
      id: 3,
      title: "Event 3",
      date: "September 22-24, 2024",
      location: "Bihar, IN",
    },
    {
      id: 4,
      title: "Event 4",
      date: "December 24-25, 2024",
      location: "Singrauli, IN",
    },
    {
      id: 5,
      title: "Event 5",
      date: "March 15-17, 2024",
      location: "Uttar Pradesh, IN",
    },
    { id: 6, title: "Event 6", date: "July 8-10, 2024", location: "Assam, IN" },
    {
      id: 7,
      title: "Event 7",
      date: "September 22-24, 2024",
      location: "Bihar, IN",
    },
    {
      id: 8,
      title: "Event 8",
      date: "December 24-25, 2024",
      location: "Singrauli, IN",
    },
  ];

  const testimonials = [
    {
      name: "Jag Jeevan",
      role: "Event Planner",
      quote:
        "This platform has revolutionized the way I manage events. It's a game-changer!",
    },
    {
      name: "Aditya Tiwari",
      role: "Conference Organizer",
      quote:
        "The ease of use and powerful features make this the go-to solution for all our event needs.",
    },
    {
      name: "Hujaifa Ahmed",
      role: "Photo-Copy Manager",
      quote:
        "I can't imagine planning weddings without this tool. It's become an essential part of my business.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* What you love Section */}
      <section className="w-full">
        <div className="bg-zinc-100 px-80 max-sm:px-8 py-16">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-4xl font-bold tracking-tighter">
            Tell us what you love
          </h1>
          <h3 className="text-xl">
            This will help us curate events specially for you{" "}
          </h3>
          <div className="flex gap-4 flex-wrap py-8">
            <Categ />
          </div>
          <button className="btn-Blue">Show More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full pt-16 bg-white transition-all duration-500 ease-in-out">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
            Why Choose Us
          </h2>
        </div>
        <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center px-6 sm:px-8 lg:px-60">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="bg-zinc-100 ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-zinc-100 w-full pt-16 transition-all duration-500 ease-in-out">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
          Upcoming Events
        </h2>
        <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-8 lg:px-60">
          {eventCards.map((event) => (
            <div
              key={event.id}
              className="bg-white ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-zinc-500 mb-1">{event.date}</p>
              <p className="text-zinc-500">{event.location}</p>
              <button className="btn-Blue my-2">Learn More</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mb-16">
          <button className="btn-Blue"><Link to="/eventForYou">View all events</Link></button>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mt-16">
            What Our Clients Say
          </h2>
        </div>
        <div className="flex gap-8 px-60 py-32 max-sm:flex-col max-sm:px-8 max-sm:py-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <div>
                <h3 className="text-zinc-500 mt-4">{testimonial.quote}</h3>
                <p className="text-lg font-bold mt-2">{testimonial.name}</p>
                <p className="text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </div>
  );
};

export default Welcome;
