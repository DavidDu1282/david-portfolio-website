import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbox from "./components/Chatbox";

const App = () => {
  return (
    <div className="w-full bg-gray-50">
      <Header />
      <main className="flex flex-col items-center space-y-12">
        <About />
        <Projects />
        <Contact />
        {/* <section className="w-full max-w-4xl mx-auto p-6"> */}
          {/* <h1 className="text-3xl font-bold text-center mb-4">Chatbox</h1> */}
        <Chatbox />
        {/* </section> */}
      </main>
    </div>
  );
};


// export default App;
// const App = () => {
//   return (
//     <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
//       <div className="w-full max-w-4xl h-[80vh] bg-gray-100 rounded-lg shadow-lg flex flex-col">
//         {/* Message History */}
//         <div className="flex-grow overflow-y-auto bg-white border-t border-b p-4">
//           <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
//         </div>

//         {/* Input Section */}
//         <div className="h-[80px] flex items-center p-4 bg-gray-200 border-t">
//           <textarea
//             placeholder="Type your message..."
//             className="flex-grow h-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
//           ></textarea>
//           <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
