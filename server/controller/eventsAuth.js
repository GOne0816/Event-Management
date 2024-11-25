const Event = require("../models/eventsSchema");

const createEvent = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debugging line to check incoming data

    const { 
      eventName, 
      eventDate, 
      eventPlace, 
      eventLocation, 
      eventDescription 
    } = req.body;

    // Validate required fields
    if (!eventName || !eventDate || !eventPlace || !eventLocation) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields: eventName, eventDate, eventLocation, and eventPlace.",
      });
    }

    // Create a new event instance
    const newEvent = new Event({
      eventName,
      eventDate,
      eventPlace,
      eventLocation,
      eventDescription,
    });

    // Save the event to the database
    await newEvent.save();

    // Respond with success message
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error while creating event:", error.message); // Log the error message for better clarity
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Unable to create event.",
      error: error.message, // Optionally, send error message for debugging
    });
  }
};

//<---------------------------------------------------Show Events-------------------------------------------------------->

const showEvent = async (req,res)=>{
  try{
    const events = await Event.find().sort({eventDate: -1});
    if(!events){
      return res.status(404).json({
        success: false,
        message:"No Event Found"
      })
    }
    res.status(200).json({message:events})

  }
  catch(error){
    console.error("Error while showing events:", error.message); // Log the error message for better clarity
  }
}

module.exports = {createEvent,showEvent}
