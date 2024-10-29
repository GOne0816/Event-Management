import React, { useState } from "react";
import { RiSearchLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";

const Welcome = () => {


  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="size-12" />,
      title: "Easy Scheduling",
      details:
        "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="size-12" />,
      title: "Attendee Management",
      details:
        "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="size-12" />,
      title: "Venue Coordination",
      details:
        "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="size-12" />,
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
      location: "Indore, IN",
    },
    {
      id: 2,
      title: "Event 2",
      date: "July 8-10, 2024",
      location: "Delhi, IN",
    },
    {
      id: 3,
      title: "Event 3",
      date: "September 22-24, 2024",
      location: "Jabalpur, IN",
    },
    {
      id: 4,
      title: "Event 4",
      date: "December 24-25, 2024",
      location: "Bhopal, IN",
    },
  ];
  return (
    <div className="w-full h-dvh flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="text-white bg-zinc-900 flex flex-col justify-center items-center min-h-[60%] w-full max-sm: max-md:py-24 lg:py-32 xl:py-48">
        <h1 className="flex justify-center p-4 text-6xl font-extrabold max-sm:text-3xl">
          Manage Your Events with Ease
        </h1>
        <p className="text-center px-96 pb-4 text-lg max-sm:text-sm max-sm:px-32">
          Streamline your event planning process with our powerful management
          tools. From small gatherings to large conferences, we've got you
          covered.
        </p>
        <p className="py-4 text-lg font-bold max-sm:text-sm">Discover the Most happening events around you</p>
        <div className="flex justify-center items-center bg-white px-4 rounded-lg ">
          <RiSearchLine className="size-6 text-black" />
          <input
            type="text"
            placeholder="Search Events, Categories, Location..."
            className="px-4 min-w-96 py-2 outline-none text-black "
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 bg-white">
        <div className="px-4 max-sm:px-6">
          <h2 className="text-3xl font-bold tracking-tighter max-sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose Us
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 px-96 max-sm:px-16 max-sm:gap-4 max-sm:grid-cols-1 gap-16 text-center">
            {featuresList.map((features) => (
              <div
                key={features.id}
                className="bg-zinc-100 ring-1 ring-zinc-400 rounded-lg min-w-96 min-h-32 p-6"
              >
                <h1 className="text-xl font-bold mb-2 flex items-center justify-center">
                  {features.icon}
                </h1>
                <h1 className="text-xl font-bold mb-2">{features.title}</h1>
                <p className="text-center text-zinc-500">{features.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-zinc-100 w-full py-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Upcoming Events
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 px-32 gap-8 max-sm:px-16 max-sm:gap-4 max-sm:grid-cols-2">
            {eventCards.map((events) => (
              <div key={events.id} className="bg-white ring-1 ring-zinc-400 rounded-lg min-w-96 min-h-32 p-6 max-sm:min-w-48">
                <h3 className="text-xl font-bold mb-2">{events.title}</h3>
                <p className="text-zinc-500 mb-1">{events.date}</p>
                <p className="text-zinc-500">{events.location}</p>
                <button className=" btn-AltDark mt-4">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
