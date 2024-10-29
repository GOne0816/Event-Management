import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";

const Welcome = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="text-3xl text-blue-600" />,
      title: "Easy Scheduling",
      details: "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="text-3xl text-green-600" />,
      title: "Attendee Management",
      details: "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-3xl text-red-600" />,
      title: "Venue Coordination",
      details: "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="text-3xl text-purple-600" />,
      title: "Analytics & Reporting",
      details: "Gain valuable insights with comprehensive event analytics and customizable reports.",
    },
  ];

  const eventCards = [
    { id: 1, title: "Event 1", date: "March 15-17, 2024", location: "Uttar Pradesh, IN" },
    { id: 2, title: "Event 2", date: "July 8-10, 2024", location: "Assam, IN" },
    { id: 3, title: "Event 3", date: "September 22-24, 2024", location: "Bihar, IN" },
    { id: 4, title: "Event 4", date: "December 24-25, 2024", location: "Singrauli, IN" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-white bg-zinc-900 flex flex-col justify-center items-center min-h-[60vh] w-full transition-all duration-500 ease-in-out px-6 lg:px-48 lg:py-20">
        <h1 className="text-center p-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Manage Your Events with Ease</h1>
        <p className="text-center px-2 sm:px-6 md:px-12 lg:mx-10 xl:mx-40 pb-4 text-md sm:text-lg">
          Streamline your event planning process with our powerful management tools. From small gatherings to large conferences, we've got you covered.
        </p>
        <p className="py-4 text-md sm:text-lg font-bold text-center">Discover the most happening events around you</p>
        <div className="flex justify-center items-center bg-white px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-md">
          <RiSearchLine className="text-black text-lg" />
          <input
            type="text"
            placeholder="Search Events, Categories, Location..."
            className="px-4 py-2 outline-none text-black w-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 bg-white transition-all duration-500 ease-in-out">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8">Why Choose Us</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center px-6 sm:px-8 lg:px-32">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="bg-zinc-100 ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="text-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-zinc-100 w-full py-16 transition-all duration-500 ease-in-out">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8">Upcoming Events</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-8 lg:px-32">
          {eventCards.map((event) => (
            <div
              key={event.id}
              className="bg-white ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-zinc-500 mb-1">{event.date}</p>
              <p className="text-zinc-500">{event.location}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 transform hover:bg-blue-700">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Welcome;
