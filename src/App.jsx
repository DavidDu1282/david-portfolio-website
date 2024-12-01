import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
