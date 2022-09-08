var mongoose = require('mongoose');

mongoURI = 'mongodb+srv://remixworlds:4344344jJ!@cluster0.nna35ug.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection open'); 
}); 

module.exports = db;