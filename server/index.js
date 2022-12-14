const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const corsOptions = require('./config/corsOptions')
const app = express();

// Connect to database
const Mongo_URI = 'mongodb+srv://rudypie05:v1YtdCnLIycxQI8e@cluster0.brkofan.mongodb.net/mgmt_db?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(Mongo_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
// connectDB();

app.use(cors(corsOptions)) ;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`) ;
  })
})

// app.listen(port, console.log(`Server running on port ${port}`));
