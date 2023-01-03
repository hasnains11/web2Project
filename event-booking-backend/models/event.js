const Joi = require("joi");
const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2000,
  },
  date: {
    type:String,
    minlength: 2,
    maxlength: 2000,
  },
  type: {
    type:String,
    minlength: 2,
    maxlength: 2000,
  },
  venue: {
    type:String,
    minlength: 2,
    maxlength: 2000,
  },
  image: {
    type:String,
    minlength: 2,
    maxlength: 2000,
  },
  
  city: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  authorname:{
    type:String,
  },

  authorid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    unique:false,
  }
});

const createEvent=()=>{
  
}


module.exports=mongoose.model('Event',eventsSchema);