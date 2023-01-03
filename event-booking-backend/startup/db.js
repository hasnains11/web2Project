const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = config.get('db');
  mongoose.set({strictQuery:true});
  mongoose.connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch(()=>console.log('Database error'));
}