import React, { useState } from "react";
import "../index.css";
import APIResponse from "./APIResponse";

const ChatResponse = ({ response }) => {
  const [res, setRes] = useState([]);
  const [ans, setAnswer] = useState([]);

  if (!response) {
    return null;
  }
  const { candidates } = response;

  return (
    <>
      <div className="response-container">
        <h1 className="heading-res">Response</h1>
        {candidates.map((candidate, index) => {
          return (
            <div key={index}>
              <APIResponse text={candidate.content.parts[0].text} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatResponse;
