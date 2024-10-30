import React, { useRef } from "react";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

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
      name: "Tiwari BKL",
      role: "Conference Organizer",
      quote:
        "The ease of use and powerful features make this the go-to solution for all our event needs.",
    },
    {
      name: "Hujaifa BSDK",
      role: "Photo-Copy Manager",
      quote:
        "I can't imagine planning weddings without this tool. It's become an essential part of my business.",
    },
  ];

  const notify = () => {
    toast(
      <div className="flex">
        <div className="p-5 pr-0">
          <FaCircleCheck size={20} />
        </div>
        <h1 className="p-5 font-semibold">Message sent successfully!</h1>
      </div>
    );
  };
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageRef = useRef();
  const subjectRef = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "bcdc75f6-2d3f-4d73-8734-be1152ccfe26");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageRef.current.value = "";
    subjectRef.current.value = "";
    notify();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-white bg-zinc-900 flex flex-col justify-center items-center min-h-[60vh] w-full transition-all duration-500 ease-in-out px-6 lg:px-48 lg:py-20">
        <h1 className="text-center p-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Manage Your Events with Ease
        </h1>
        <p className="text-center px-2 sm:px-6 md:px-12 lg:mx-10 xl:mx-40 pb-4 text-md sm:text-lg max-sm:text-xs">
          Streamline your event planning process with our powerful management
          tools. From small gatherings to large conferences, we've got you
          covered.
        </p>
        <p className="py-4 text-md sm:text-lg font-bold text-center max-sm:text-sm">
          Discover the most happening events around you
        </p>
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
      <section className="w-full pt-16 bg-white transition-all duration-500 ease-in-out">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
            Why Choose Us
          </h2>
        </div>
        <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center px-6 sm:px-8 lg:px-32">
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
        <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-8 lg:px-32">
          {eventCards.map((event) => (
            <div
              key={event.id}
              className="bg-white ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-zinc-500 mb-1">{event.date}</p>
              <p className="text-zinc-500">{event.location}</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 transform hover:bg-blue-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mt-16">
            What Our Clients Say
          </h2>
        </div>
        <div className="flex gap-8 px-36 py-32 max-sm:flex-col max-sm:px-8 max-sm:py-16">
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
      <section className="bg-zinc-100 w-full">
        <div className="">
          <div className=" flex justify-center items-center flex-col text-center py-24 ">
            <h1 className="text-center font-bold text-5xl tracking-tighter max-sm:text-3xl max-sm:font-extrabold">
              Get in Touch
            </h1>
            <p className="text-zinc-900 dark:text-zinc-500 text-xl max-sm:text-xs">
              Have a project in mind? Let's chat.
            </p>
            <form
              onSubmit={onSubmit}
              className="w-1/4 flex flex-col gap-4 my-12 max-sm:w-3/4  max-lg:w-2/4"
            >
              <input
                ref={nameInputRef}
                type="text"
                name="from_name"
                id=""
                placeholder="Name"
                className="p-4 rounded-lg "
                required
              />
              <input
                ref={emailInputRef}
                type="from_email"
                name="Email"
                id=""
                placeholder="Email"
                className="p-4 rounded-lg "
                required
              />
              <input
                ref={subjectRef}
                type="text"
                name="subject"
                id=""
                placeholder="Subject"
                className="p-4 rounded-lg "
                required
              />
              <textarea
                ref={messageRef}
                type="text"
                name="Message"
                rows={6}
                placeholder="Message"
                className="p-4 rounded-lg "
                required
              />
              <button className="btn-Blue my-6">Submit</button>
            </form>
            <Toaster className="p-5" position="top-right" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
