import React, { useState } from "react";
import { RiSearchLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";

const Welcome = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="text-4xl" />,
      title: "Easy Scheduling",
      details:
        "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="text-4xl" />,
      title: "Attendee Management",
      details:
        "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Venue Coordination",
      details:
        "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="text-4xl" />,
      title: "Analytics & Reporting",
      details:
        "Gain valuable insights with comprehensive event analytics and customizable reports.",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full p-4 bg-white flex justify-between items-center shadow-md px-5 lg:px-10 md:px-10 fixed top-0 left-0 z-50">
        <h1 className="text-3xl font-extrabold">Festify</h1>

        {/* Right-side links on larger screens, menu icon on small screens */}
        <div className="hidden md:flex gap-8">
          {["Create Event", "Events for You", "SignUp"].map((text) => (
            <h1
              key={text}
              className="cursor-pointer hover:text-red-500 transition duration-300 ease-in-out"
            >
              {text}
            </h1>
          ))}
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="block md:hidden text-2xl"
        >
          {isSidebarOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </nav>

      {/* Sidebar (for smaller screens) */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-40 p-6">
          <h1 className="text-3xl font-extrabold mb-8">Festify</h1>
          <div className="flex flex-col gap-4">
            {["Create Event", "Events for You", "SignUp"].map((text) => (
              <h1
                key={text}
                className="text-lg cursor-pointer hover:text-red-500 transition duration-300 -mr-5 ease-in-out"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
              >
                {text}
              </h1>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="text-white bg-zinc-900 flex flex-col justify-center items-center w-full pt-48 pb-20  px-4">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold">
          Manage Your Events with Ease
        </h1>
        <p className="text-center px-4 md:px-20 lg:px-40 xl:px-60 text-lg my-6">
          Streamline your event planning process with our powerful management
          tools. From small gatherings to large conferences, we've got you
          covered.
        </p>
        <div className="flex items-center lg:w-96 md:w-96 sm:w-96 justify-start bg-white rounded-lg p-2 mt-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <RiSearchLine className="text-black text-xl w-20  " />
          <input
            type="text"
            placeholder="Search Events, Categories, Location..."
            className="py-1 outline-none text-black w-full"
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Why Choose Us
        </h2>
        <div className="flex items-center justify-center px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl text-center">
            {featuresList.map((feature) => (
              <div
                key={feature.id}
                className="bg-zinc-100 ring-1 ring-black rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-zinc-200 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-2 text-red-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-500">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
