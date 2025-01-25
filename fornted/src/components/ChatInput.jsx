import React, { useState } from "react";
import "../index.css";

const ChatInput = ({ handleSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    handleSubmit(question); // Call the parent function with the question
    setQuestion(""); // Clear the input field after submission
  };

  return (
    <div className="input-container">
      <h1 className="heading">Gemini AI</h1>
      <div>
        <form className="search-box" onSubmit={handleFormSubmit}>
          <label htmlFor="question-input" className="label">
            Ask A Question
          </label>
          <div>
            <input
              id="question-input"
              className="input"
              type="text"
              value={question}
              onChange={handleChange}
              placeholder="Enter your question"
            />
            <button className="btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
