import React from "react";

const CreateEvent = () => {
  return (
    <div className="bg-zinc-100 h-[100%] w-full">
      <section className=" flex justify-center items-center flex-col gap-8 py-8">
        {/* Watch Now Video Card */}
        <div className="w-2/3 bg-white p-8 flex gap-8 rounded-xl">
          <div className="h-28 w-28 bg-zinc-200 rounded-xl"></div>
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
        <div className="w-2/3 py-16 flex gap-4">
          <form className="bg-white w-4/6 rounded-xl p-8">
            <h1 className="font-bold text-xl">Publish Your Event</h1>
            <h3 className="font-semibold text-lg">Step 1</h3>

            {/* Event Name Input Section */}
            <div className="flex flex-col">
              <label htmlFor="eventName">Event Name *</label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                placeholder="Enter the name of your event"
              />
            </div>

            {/* Event Type Input Secton */}
            <div className="flex flex-col">
              <label htmlFor="event">Event Type *</label>
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
            <div className="flex flex-col w-80">
              <label
                htmlFor="startingDate"
                className="flex justify-between items-center"
              >
                Start Time *
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
            <div>
              <label htmlFor="description">Discription</label>
              <input type="text" name="description" id="description" />
            </div>
          </form>
          <div className="bg-white w-2/6 rounded-xl p-8">
            <h1>Tips</h1>
          </div>
        </div>
        <div className="w-2/3 bg-white py-16 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Need Help ?</h1>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent;
