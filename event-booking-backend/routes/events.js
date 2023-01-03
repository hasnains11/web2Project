const Event = require("../models/event");
const express = require("express");
const { User } = require("../models/user");

const router = express.Router();

router.post("/create", async (req, res) => {
  const eventObj = {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
    authorid: req.body.authorid,
    authorname: req.body.authorname,
    date: req.body.date,
    venue: req.body.venue,
    city: req.body.city,
    image: req.body.image,
  };

  Promise.all([
    User.findById(req.body.authorid),
    Event.findOne({ title: eventObj.title }),
  ])
    .then(async (results) => {
      //results return an array
      const [user, event] = results;
      console.log(user);

      if (event) {
        res.status(400).send("Event with the same title already Existed!");
        return;
      }
      if (!user) {
        res.status(400).send("No User found!");
        return;
      }

      const newEvent = new Event(eventObj);
      await newEvent.save().then(async (event) => {
        let user = await User.findByIdAndUpdate(
          event.author,
          { $push: { events: event._id } },
          { new: true }
        );
        res.send("Event Saved " + user);
      });
    })
    .catch((err) => {
      console.error("Something went wrong", err);
    });

  return;
});

router.get("/all", async (req, res) => {
  const events = await Event.find({});
  res.status(200).send(events);
  return;
});

module.exports = router;
