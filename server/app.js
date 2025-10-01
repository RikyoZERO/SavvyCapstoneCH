import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import axios from "axios";
import comments from "./controllers/comments.js";

// Initialize the Express application
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 3000;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`);
  next();
};

app.use(cors());
app.use(express.json());
app.use(logging);
/*
  express supports chaining `use()` statements,
  so the above 2 statements could look like this as well
  app.use(express.json()).use(logging)
*/
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:3000/
app.get("/", (request, response) => {
  response.send("Welcome to the Class SPA REST API");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

app.get("/duckphoto", async (request, response) => {
  const duckPhoto = await axios.get(`https://random-d.uk/api/random`)
  response.json(duckPhoto.data.url);
})

// Handle the request with HTTP GET method with query parameters and a url parameter
app.get("/weather/:city", (request, response) => {
  // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
  const city = request.params.city;

  // Set defaults values for the query string parameters
  let lowTemp = 32; // Unspecified Backup Value
  // request.query = { lowtemp: 0};
  if ("lowtemp" in request.query) {
    lowTemp = Number(request.query.lowtemp);
  }

  // Generate a random number to use as the temperature
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  const min = 70;
  const max = 90;
  const highTemp = Math.floor(Math.random() * (max - min + 1) + min);

  // handle GET request for weather with an route parameter of "city"
  response.json({
    text: `The weather in ${city} is ${highTemp} degrees today.`,
    temp: {
      current: highTemp,
      low: lowTemp
    },
    city
  });
});
app.use("/comments", comments);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
const server = app.listen(PORT, () => console.log(`Listening on port ${server.address().port}`));