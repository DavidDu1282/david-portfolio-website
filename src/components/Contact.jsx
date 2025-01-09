import React from 'react';

const Contact = () => {
    return (
      <section
        id="contact"
        className="bg-white flex justify-center items-center h-screen"
      >
        <div className="text-center max-w-lg w-full">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'd love to hear from you! Whether you have a question or just want
            to say hi, feel free to reach out.
          </p>
          <a
            href="mailto:david2001.du@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Email Me @david2001.du@gmail.com
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
  