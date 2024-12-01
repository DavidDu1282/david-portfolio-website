import React from 'react';

const Projects = () => {
    const projects = [
      { name: 'Project 1', description: 'Description of Project 1', link: 'https://example.com' },
      { name: 'Project 2', description: 'Description of Project 2', link: 'https://example.com' },
    ];
  
    return (
      <section id="projects" className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  