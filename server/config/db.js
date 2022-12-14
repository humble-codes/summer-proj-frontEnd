const mongoose = require('mongoose');

const Mongo_URI = 'mongodb+srv://rudypie05:v1YtdCnLIycxQI8e@cluster0.brkofan.mongodb.net/mgmt_db?retryWrites=true&w=majority'

const connectDB = async () => {
  const conn = await mongoose.connect(Mongo_URI);

  // const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
