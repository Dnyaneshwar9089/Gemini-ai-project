import React from "react";
import axios from "axios"; // Import axios

const API_URL = "http://localhost:8080/ai/ask";

export default async function fetchResponse(question) {
  try {
    const response = await axios.post(API_URL, { question }); // Correct usage of API_URL and payload
    return response.data; // Directly return the data
  } catch (error) {
    console.error("Error fetching response:", error); // Log error for debugging
    throw error; // Re-throw the error to handle it at the calling point
  }
}
