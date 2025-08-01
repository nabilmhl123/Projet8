import { useEffect, useState } from "react";
import React from 'react';
import { projectsData, projectsNav } from "../data";

const Projects = () => {
  const [item, setItem] = useState({ name: 'tous' });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'tous') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="container mx-auto py-12">
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center">
          {projectsNav.map((navItem, index) => (
            <li
              key={index}
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index 
                  ? 'text-orange-600 border-b-2 border-orange-500' 
                  : 'text-gray-700 hover:text-orange-500'
              } cursor-pointer capitalize m-4 pb-2 transition-all duration-300 font-medium`}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="project-card max-w-md rounded-2xl overflow-hidden shadow-lg bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
            <div className="h-64 w-full">
              <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover"/>
            </div>
            <div className="project-info p-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">Catégorie: {project.category}</p>
              <p className="text-gray-600 mt-2">Problèmes rencontrés: {project.issues}</p>
              <p className="text-gray-600 mt-2">Solutions: {project.solutions}</p>
              <p className="text-gray-600 mt-2">Compétences: {project.skills}</p>
              {project.codeLink === 'Projet développé localement' ? (
                <p className="text-orange-600 mt-2 font-medium">{project.codeLink}</p>
              ) : (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-amber-600 mt-2 font-medium transition-colors duration-300">
                  Voir le code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;