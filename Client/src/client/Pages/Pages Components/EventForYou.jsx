import React from "react";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"
import Img from "../Assets/GOne2.jpg";

const EventForYou = () => {
  const Events = [
    {
      Image: Img,
      Title: "Heartland India",
      Hosted: "Event Navigator",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Crypto Unify Conference",
      Hosted: "Meta Events",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Master the Public Speaking",
      Hosted: "Hujaifa Co.",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Dua Lipa Concert in India 2024",
      Hosted: "Event Guide",
      Time: "Happening in 2 week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: Img,
      Title: "Heartland India",
      Hosted: "Event Navigator",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Crypto Unify Conference",
      Hosted: "Meta Events",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Master the Public Speaking",
      Hosted: "Hujaifa Co.",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Dua Lipa Concert in India 2024",
      Hosted: "Event Guide",
      Time: "Happening in 2 week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: Img,
      Title: "Heartland India",
      Hosted: "Event Navigator",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Crypto Unify Conference",
      Hosted: "Meta Events",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Master the Public Speaking",
      Hosted: "Hujaifa Co.",
      Time: "Happening next week.",
      Location: "to be updated, New Delhi, India",
    },
    {
      Image: "",
      Title: "Dua Lipa Concert in India 2024",
      Hosted: "Event Guide",
      Time: "Happening in 2 week.",
      Location: "to be updated, New Delhi, India",
    },
  ];
  return (
    <div className="h-[100%] px-8 md:px-80 py-8">
      <h1 className="text-4xl font-bold tracking-tighter">Events for {"UserName"}</h1>
      <h3 className="tracking-tight">Events that you would not want to miss! </h3>
      <div className=" flex gap-4 py-4">
        <div className="space-y-2 w-full ">
          {Events.map((event, index) => (
            <div className="border-2 p-4 rounded-lg flex gap-4 max-sm:flex-col" key={index}>
              <Skeleton className="min-w-[150px] h-[150px] rounded-lg" />
              {/* <img
                src={event.Image}
                alt={event.Title}
                className="rounded-md object-cover w-32"
              /> */}
              <div className="w-92">
                <h2 className="text-lg font-bold">{event.Title}</h2>
                <p className="text-zinc-600">Hosted by: {event.Hosted}</p>
                <p className="text-zinc-600">Time: {event.Time}</p>
                <p className="text-zinc-600">Location: {event.Location}</p>
                <Separator />
                <Button className="mt-4 ">I'm Interested</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-6/12 space-y-2 max-sm:hidden">
          <div className="border-2 rounded-lg p-4 h-min">
            <h1>CITIES OF INTEREST</h1>
            <Separator />
            <h2>Current City : Chhindwara </h2>
            <h2>You are following 1 cities for updates.</h2>
          </div>

          <div className="border-2 rounded-lg p-4 h-min">
            <h1>Interest you may like to Follow</h1>
            <Separator />
            <h2>Current City : Chhindwara </h2>
            <h2>You are following 1 cities for updates.</h2>
          </div>
          <div className="border-2 rounded-lg p-4 h-min">
            <h1>People to Follow</h1>
            <Separator />
            <h2>
              Find Your Friends and discover events they are interested in!{" "}
            </h2>
            <Button className="mt-4 w-full">Find Friends</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForYou;
