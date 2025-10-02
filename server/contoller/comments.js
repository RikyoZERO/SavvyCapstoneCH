import { Router } from  "express";
import Duckup from "../models/Duckup.js";

const router = Router();

// Create DuckUp route
router.post("/", async (request, response) => {
  try {
    const newDuckup = new Duckup(request.body);

    const data = await newDuckup.save();

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError") return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all DuckUp route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Duckup.find(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single DuckUp by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Duckup.findById(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors)
  }
});

export default router;