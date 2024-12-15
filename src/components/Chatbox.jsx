import React, { useState } from "react";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    setIsTyping(true);

    const eventSource = new EventSource(`/chat?user_message=${encodeURIComponent(input)}`);
    let aiMessage = "";

    eventSource.onmessage = (event) => {
      aiMessage += event.data;
      setMessages((prev) => {
        const updatedMessages = [...prev];
        if (updatedMessages[updatedMessages.length - 1]?.sender === "bot") {
          updatedMessages[updatedMessages.length - 1].text = aiMessage;
        } else {
          updatedMessages.push({ sender: "bot", text: aiMessage });
        }
        return updatedMessages;
      });
    };

    eventSource.onerror = () => {
      setIsTyping(false);
      eventSource.close();
    };

    eventSource.onclose = () => {
      setIsTyping(false);
      eventSource.close();
    };
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg flex flex-col">
      {/* Chatbox Header */}
      <h2 className="text-3xl font-bold text-center p-4">Chatbox</h2>

      {/* Message History Section */}
      <div className="h-[70vh] flex-grow overflow-y-auto bg-white border-t border-b p-4">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`inline-block p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
        )}
      </div>

      {/* Input Section */}
      <div className="h-[80px] flex items-center p-4 bg-gray-200 border-t">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message (Shift+Enter for new line, Enter to send)"
          className="flex-grow h-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
        ></textarea>
        <button
          onClick={sendMessage}
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;

// import 'react-chatbox-component/dist/style.css';
// import {ChatBox} from 'react-chatbox-component';
// class Chatbox extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [],
//       user: {},
//     };
//   }

//   componentDidMount() {
//     const messages = [
//       {
//         "text": "Hello there",
//         "id": "1",
//         "sender": {
//           "name": "Ironman",
//           "uid": "user1",
//           "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
//         },
//       },
//       {
//         "text": "Hi Mr. Stark",
//         "id": "2",
//         "sender": {
//           "name": "Spiderman",
//           "uid": "user2",
//           "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
//         },
//       },
//       {
//         "text": "Hello Spiderman, how are you today?",
//         "id": "3",
//         "sender": {
//           "name": "Ironman",
//           "uid": "user1",
//           "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
//         },
//       },
//     ];

//     const user = {
//       "uid": "user1"
//     };

//     this.setState({ messages: messages, user: user });

//   }

//   render() {
//     return (
//       <div className='container' style={{maxWidth: '800px', paddingTop: '100px'}}>
//         <div className='chat-header'>
//           <h5>React Chat Box Example</h5>
//         </div>
//         <ChatBox messages={this.state.messages} />
//       </div>
//     )
//   }
// }

// export default Chatbox;