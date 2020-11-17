const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionString = 'mongodb+srv://admin:iB7vdALhLeeZXQI1@cluster0.9sstf.mongodb.net/athletesDB?retryWrites=true&w=majority';

mongoose.connect(connectionString, options, (err) => {
  if (err) {
    console.log(`There was an error: ${err}`);
  } else {
    console.log('Database connected.');
  }
});