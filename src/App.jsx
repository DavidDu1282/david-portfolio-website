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

// const App = () => {
//   return (
//     <div className="bg-red-500 text-white p-4">
//   If this box is red, Tailwind CSS is working!
// </div>
    
//   );
// };


export default App;
