import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import JagJeevan from "../Components/Assets/GOne.png";
import Tiwari from "../Components/Assets/Tiwari.jpg";
import Hybrid from "../Components/Assets/Hujaifa.jpg"

const About = () => {
  const founders = [
    {
      image: Tiwari,
      name: "Aditya Tiwari",
      post: "Founder and CEO, Festify",
      description:
        "Festify is where innovation meets passion, and every line of code contributes to making the world’s largest event discovery platform come to life. We are passionate about developing a platform that makes it super simple to discover events for people, no matter where they are. We embody the spirit of #StayHappening and are working to impact others!",
    },
    {
      image: JagJeevan,
      name: "Jag Jeevan",
      post: "Co-Founder and CEO, Festify",
      description:
        "We believe people should go out, attend events, meet interesting people, and live a happening life. Wherever you are in the world, AllEvents helps you turn moments into lasting memories. It’s your personal guide to exploring the vibrant world of local events and experiences, where every day holds the promise of a new adventure.",
    },
  ];

  const Director = [{
    image: Hybrid,
    name: "Hujaifa Ahmed",
    post: "Director, Festify",
    description:
    "The Director of an Event Management Organization oversees the planning and execution of events, ensuring creativity and precision in every detail. They lead a team of professionals, manage client relationships, and coordinate logistics, all while maintaining a focus on delivering exceptional experiences that exceed client expectations and create lasting memories."
  }]

  return (
    <div className="h-full">
      <section className="px-8 md:px-24 py-16  space-y-8">
        <h1 className="text-4xl font-extrabold flex justify-center tracking-tighter md:text-5xl">
          We reimagine how you discover events
        </h1>
        <p className="text-lg flex justify-center font-bold text-right font-serif text-gray-800">
          Events are our pulse, the rhythm that drives us.
        </p>
        <p className="flex justify-center">
          Founded in 2024, Festify is now one of the world’s largest Event
          Discovery Platforms. Our mission is to turn ordinary days into
          extraordinary memories. For you. For the memories you crave to create.
          For the communities you seek to engage.
        </p>
        <p className="text-lg">
          Whether you want to be thrilled, inspired, or connected, we bring
          local events to your fingertips. Whenever, wherever, we are here to
          make your moments #Happening.
        </p>
        <p className="text-lg">
          We are also the ticketing partner for millions of events across the
          globe, we are the perfect platform for event organizers, providing
          seamless ticketing and promotion that empowers organizers to bring
          their events to life and share them with the world.
        </p>
        <button className="btn-Text flex items-center pl-2">
          <RiArrowRightSFill className="text-lg" />
          Read our story
        </button>

        {/* How we make magic happen! */}
        <div className="pt-16">
          <h1 className="text-4xl flex justify-center font-extrabold tracking-tighter md:text-5xl">
            How we make magic happen!
          </h1>
          <div className="flex flex-col md:flex-row gap-8 py-16">
            <div className="bg-zinc-200 ring-2 ring-zinc-400 rounded-md w-full p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-center">Event Discovery</h1>
                <p>
                  We make it easy for event explorers to discover events
                  happening around them!
                </p>
                <p>
                  Whether it’s a concert, a food festival, or a yoga class - you
                  will never miss an event you would want to attend.
                </p>
              </div>
              <button className="btn-Text">Discover Events</button>
            </div>
            <div className="bg-zinc-200 ring-2 ring-zinc-400 rounded-md w-full p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-center">Event Ticketing</h1>
                <p>
                  We provide a simple yet comprehensive event listing and
                  ticketing solution to event organizers!
                </p>
                <p>
                  List your event, sell tickets, manage attendees and promote
                  your event.
                </p>
              </div>
              <button className="btn-Text">Publish Events</button>
            </div>
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="py-16">
          <h1 className="text-4xl font-extrabold flex justify-center tracking-tighter md:text-5xl">
            Meet the Founders
          </h1>
          <div className="flex flex-col md:flex-row gap-8 py-16">
            {founders.map((founder) => (
              <div key={founder.name} className="shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start ring-2 ring-zinc-200">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-2xl w-40 h-40 md:w-48 md:h-48 mb-4 lg:w-44 lg:h-44 lg:mt-16 md:mb-0 md:mr-8"
                />
                <div className="flex justify-center flex-col text-center">
                  <h1 className="text-2xl font-bold tracking-tighter ">{founder.name}</h1>
                  <h3 className="text-zinc-400">{founder.post}</h3>
                  <p className="text-zinc-600 py-4">{founder.description}</p>
                </div>
              </div>
            ))}

          </div>
          <div className="flex justify-center">
         <div className="lg:w-1/2 flex justify-center items-center">
            {Director.map((Director) => (
              <div key={Director.name} className="shadow-xl rounded-2xl p-8 flex flex-col justify-center md:flex-row items-center md:items-start ring-2 ring-zinc-200">
                <img
                  src={Director.image}
                  alt={Director.name}
                  className="rounded-2xl w-40 h-40 md:w-48 md:h-48 mb-4 lg:w-44 lg:h-44 lg:mt-20 md:mb-0 md:mr-8"
                />
                <div className="flex flex-col text-center justify-center">
                  <h1 className="text-2xl font-bold tracking-tighter ">{Director.name}</h1>
                  <h3 className="text-zinc-400">{Director.post}</h3>
                  <p className="text-zinc-600 py-4">{Director.description}</p>
                </div>
              </div>
            ))}
            </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default About;
