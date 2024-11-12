import React from "react";

const CreateEvent = () => {
  return (
    <div className="bg-zinc-100 h-[100%] w-full">
      <section className=" flex justify-center items-center flex-col gap-8 py-8 max-sm:py-4">
        {/* Watch Now Video Card */}
        <div className="w-2/3 bg-white p-8 flex gap-8 rounded-xl max-sm:w-[90%]">
          <div className="h-28 min-w-28 bg-zinc-200 rounded-xl"></div>
          <div className="space-y-2">
            <h1 className="text-lg font-bold">
              Here's a video to help you out!
            </h1>
            <p>
              Check out this product tour video and learn how you can make the
              most out of Festify and it's features!
            </p>
            <button className="btn-Outlined">Watch Now</button>
          </div>
        </div>

        {/* Event Form */}
        <div className="w-2/3 py-16 flex gap-4 max-sm:w-[90%]">
          <form className="bg-white w-4/6 max-sm:w-full rounded-xl p-8">
            <h1 className="font-bold text-xl mb-8">Publish Your Event</h1>
            <h3 className="font-semibold text-lg mb-4">Step 1</h3>

            {/* Event Name Input Section */}
            <div className="flex flex-col my-4">
              <label htmlFor="eventName">
                Event Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                placeholder="Enter the name of your event"
                className="ring-1 ring-zinc-500 rounded-xl p-2"
              />
            </div>

            {/* Event Type Input Secton */}
            <div className="flex flex-col my-4">
              <label htmlFor="event">
                Event Type <span className="text-red-500">*</span>
              </label>
              <label htmlFor="single" className="w-36 flex justify-between">
                Single Event
                <input
                  type="radio"
                  name="eventOpt"
                  id="single"
                  value="Single Event"
                />
              </label>
              <label htmlFor="recurring" className="w-36 flex justify-between">
                Recurring Event
                <input
                  type="radio"
                  name="eventOpt"
                  id="recurring"
                  value="Recurring Event"
                />
              </label>
            </div>

            {/* Time & Date Section */}
            <div className="flex flex-col w-80 max-sm:w-full">
              <label
                htmlFor="startingDate"
                className="flex justify-between items-center"
              >
                Start Time <span className="text-red-500">*</span>
                <input type="date" name="startingDate" id="" />
              </label>
              <label
                htmlFor="startingDate"
                className="flex justify-between items-center"
              >
                End Time
                <input type="date" name="endingDate" id="" />
              </label>
            </div>

            {/* Where will your event take place? */}
            <div>
              <label htmlFor="">
                Where will your event take place?
                <select name="Where will your event take place?" id="">
                  pl
                  <option value="">Select a location</option>
                  <option value="">Venue</option>
                  <option value="">Online</option>
                  <option value="">Recorderd Events</option>
                </select>
              </label>
            </div>

            {/* Event Description */}
            <div className="flex flex-col my-4">
              <label htmlFor="description" className="">
                Discription <span className="text-red-500">*</span>
              </label>
              <div>
                <div
                  className="h-96 w-full ring-1 ring-zinc-500 rounded-xl"
                  contentEditable="true"
                >
                  <div className="mb-2">
                    <button className="btn-Outlined rounded-none rounded-tl-xl">
                      B
                    </button>
                    <button className="btn-Outlined rounded-none">
                      <i>I</i>
                    </button>
                    <button className="btn-Outlined underline rounded-none">
                      U
                    </button>
                    <button className="btn-Outlined rounded-none capitalize rounded-tr-xl">
                      Clear
                    </button>
                  </div>
                  <div className="pl-2">Write event description...</div>
                </div>
              </div>
            </div>

            {/* Organizer Page */}
            <div>
              <label htmlFor="">
                Organizer Page ({" "}
                <a className="text-blue-500" href="http://">
                  create new page
                </a>{" "}
                )
              </label>
              <div className="ring-1 ring-zinc-500 rounded-xl p-4 my-4">
                <input type="text" name="" id="" />
              </div>
            </div>
            <button className="btn-Blue">Continue</button>
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Step 2</h3>
              <ul>
                <li>
                  <span> &#8226; </span> Add Event Banner
                </li>
                <li>
                  <span> &#8226; </span> Setup Ticketing & Payment Details
                </li>
                <li>
                  <span> &#8226; </span> Publish Your Event Page
                </li>
              </ul>
            </div>
          </form>
          <div className="bg-white w-2/6 rounded-xl p-8 max-sm:hidden">
            <div className="mb-4">
              <h1 className="text-3xl font-bold tracking-tight">Tips</h1>
              <p className="my-4">
                To make your event stand out and get unique traffic on your
                event, follow the tips provided in this panel as you create your
                event step-by-step.{" "}
              </p>
              <button className="text-blue-500 px-0">
                Here, take our product tour.
              </button>
            </div>
            <div className="bg-zinc-300 h-0.5 w-full rounded-full"></div>
            <div className="my-4">
              <h1 className="text-lg font-semibold">Or, import from other platforms</h1>
              <p className="py-4">Have you already published your events on other platform like Facebook, Eventbrite or your own website?</p>
              <button className="btn-Blue">IMPORT EVENTS</button>
            </div>
            <div className="bg-zinc-300 h-0.5 w-full rounded-full"></div>
            <div className="my-4">
              <h1 className="text-lg font-semibold">Improve your event's performance</h1>
              <p className="py-4">
              Improve your event's performanceDon't forget to add Tickets on AllEvents in your banners & designs.It helps event-goers know where they can find an option to buy tickets.</p>
              <button className="btn-Blue">DOWNLOAD MEDIA KIT</button>
            </div>
          </div>
        </div>

        {/* Need Help? */}
        <div className="w-2/3 bg-white py-16 rounded-lg p-8 max-sm:w-[90%]">
          <h1 className="text-2xl font-bold pb-4">Need Help ?</h1>
          <ul className="text-blue-500">
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                How to Create My Events Online
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                How to Send Email Invites to Attendees
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                How to keep track of your ticket sales
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                How to reach out to Potential Attendees from Your City
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                Have you already published your events on other platform like
                Facebook, Eventbrite or your own website?
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="http://">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent;
