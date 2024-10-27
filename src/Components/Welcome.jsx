import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Welcome = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="size-12"/>,
      title: "Easy Scheduling",
      details:
        "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="size-12"/>,
      title: "Attendee Management",
      details:
        "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="size-12"/>,
      title: "Venue Coordination",
      details:
        "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="size-12"/>,
      title: "Analytics & Reporting",
      details:
        "Gain valuable insights with comprehensive event analytics and customizable reports.",
    },
  ];
  return (
    <div className="w-full h-dvh flex flex-col items-center">
      <nav className="w-full p-4 px-80 bg-white flex justify-between items-center ">
        <h1 className="text-3xl font-extrabold ">Festify</h1>
        <div className="flex gap-8">
          <h1 className="cursor-pointer hover:text-red-500">Create Event</h1>
          <h1 className="cursor-pointer hover:text-red-500">Events for You</h1>
          <h1 className="cursor-pointer hover:text-red-500">SignUp</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-white bg-zinc-900 flex flex-col justify-center items-center min-h-[60%] w-full">
        <h1 className="flex justify-center p-4 text-6xl font-extrabold">
          Manage Your Events with Ease
        </h1>
        <p className="text-center px-96 pb-4 text-lg">
          Streamline your event planning process with our powerful management
          tools. From small gatherings to large conferences, we've got you
          covered.
        </p>
        <div className="flex justify-center items-center bg-white px-4 rounded-lg">
          <RiSearchLine className="size-6 text-black" />
          <input
            type="text"
            placeholder="Search Events, Categories, Location..."
            className="px-4 min-w-96 py-2 outline-none text-black "
          />
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose Us
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 px-96 gap-8 text-center">
            {featuresList.map((events) => (
              <div
                key={events.id}
                className="bg-zinc-100 ring-1 ring-black rounded-lg min-w-96 min-h-32 p-6"
              >
                <h1 className="text-xl font-bold mb-2 flex items-center justify-center">{events.icon}</h1>
                <h1 className="text-xl font-bold mb-2">{events.title}</h1>
                <p className="text-center text-zinc-500">{events.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
