import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "";

  useEffect(() => {
    // Generate a unique session ID when the component mounts
    const generateSessionId = () => {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    };

    setSessionId(generateSessionId());
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !sessionId) return;

    // Add user message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Call the backend API
      const response = await fetch(`${API_URL}/api/llm/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          prompt: input,
        }),
      });

      // Check if the response is okay (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error from backend:", errorText);
        throw new Error(`Backend returned status ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Add bot response to the chat
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error querying LLM:", error.message || error);

      // Add an error message to the chat
      const errorMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Chat History */}
      <div className="flex-grow overflow-y-auto p-4 bg-white dark:bg-gray-800 dark:text-gray-200">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } my-2`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start my-2">
            <div className="max-w-[75%] px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-200 dark:bg-gray-800 border-t dark:border-gray-700 flex items-center">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message (Shift+Enter for new line, Enter to send)"
          className="flex-grow resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
          rows={2}
          disabled={loading} // Disable input while loading
        ></textarea>
        <button
          onClick={sendMessage}
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
