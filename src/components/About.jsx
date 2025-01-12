import React from 'react';

const About = () => {
    return (
      <section
        id="about"
        className="bg-gray-100 flex justify-center items-center h-screen"
      >
        <div className="text-center max-w-2xl w-full">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-semibold">David</span>, a passionate developer with expertise in
            Data Science and Machine Learning. <br></br>I enjoy creating interactive web applications
            and solving challenging problems through code. <br></br>When I'm not coding,
            you’ll find me [Your Hobbies or Interests].
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  