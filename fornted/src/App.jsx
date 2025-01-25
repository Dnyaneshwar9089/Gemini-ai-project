import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponse";
import fetchResponse from "./service/api";

function App() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (question) => {
    setLoading(true);
    try {
      const apiResponse = await fetchResponse(question);
      setResponse(apiResponse);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-container">
        <ChatInput handleSubmit={handleSubmit} />
        {loading && <h1>Loading...</h1>}
        <ChatResponse response={response} />
      </div>
    </>
  );
}

export default App;
