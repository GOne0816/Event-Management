import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import ReqInput from "../../components/ui/RequiredInput";
import FileUpload from "../../components/ui/FileUpload";
import Select from "../../components/ui/RequiredSelect";
import DatePicker from "../../components/ui/DatePicker";
import EventDescription from "../../components/ui/EventDesc";

const CreateEvent = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by verifying the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage with the key "authToken"
    if (!token) {
      navigate("/login"); // Redirect to login page if the token is not found
    }
  }, [navigate]);

  return (
    <div className="bg-zinc-100 h-[100%] w-full">
      <section className=" flex justify-center items-center flex-col gap-8 py-8 max-sm:py-4">
        {/* Watch Now Video Card */}
        <div className="w-2/3 bg-white p-8 flex gap-8 rounded-xl max-sm:w-[90%] max-sm:flex-col">
          <Skeleton className="min-w-[120px] h-[120px] max-sm:w-[120px] rounded-lg" />
          <div className="space-y-2">
            <h1 className="text-lg font-bold">
              Here's a video to help you out!
            </h1>
            <p>
              Check out this product tour video and learn how you can make the
              most out of Festify and its features!
            </p>
            <button className="btn-Blue">Watch Now</button>
          </div>
        </div>

        {/* Event Form */}
        <div className="w-2/3 py-16 flex gap-4 max-sm:w-[90%]">
          <form className="bg-white w-4/6 max-sm:w-full rounded-xl p-8">
            <h1 className="font-bold text-xl mb-8">Publish Your Event</h1>

            {/* Event Name Input Section */}
            <div className="flex flex-col my-4">
              <ReqInput />
            </div>

            {/* Event Name Input Section */}
            <div className="flex flex-col my-4">
              <FileUpload />
            </div>

            {/* Time & Date Section */}
            <div className="flex flex-col w-72 max-sm:w-full">
              <DatePicker />
            </div>

            {/* Where will your event take place? */}
            <div className="my-4">
              <Select />
            </div>

            {/* Event Description */}
            <div className="flex flex-col my-4">
              <EventDescription className="" />
            </div>

            <button className="btn-Blue">Publish Your Event</button>
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
              <h1 className="text-lg font-semibold">
                Or, import from other platforms
              </h1>
              <p className="py-4">
                Have you already published your events on other platforms like
                Facebook, Eventbrite, or your own website?
              </p>
              <button className="btn-Blue">IMPORT EVENTS</button>
            </div>
            <div className="bg-zinc-300 h-0.5 w-full rounded-full"></div>
            <div className="my-4">
              <h1 className="text-lg font-semibold">
                Improve your event's performance
              </h1>
              <p className="py-4">
                Improve your event's performance. Don't forget to add Tickets on
                AllEvents in your banners & designs. It helps event-goers know
                where they can find an option to buy tickets.
              </p>
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
