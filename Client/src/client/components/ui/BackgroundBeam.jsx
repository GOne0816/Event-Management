import React from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1
          className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Manage Your Events with Ease
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Streamline your event planning process with our powerful management
          tools. From small gatherings to large conferences, we've got you
          covered.
        </p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Discover the most happening events around you
        </p>
      </div>
    </div>)
  );
}
