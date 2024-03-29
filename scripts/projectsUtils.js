import * as Data from './projectsData.js';
import ProjectPopUp from './projectPopUp.js';

export const display = new ProjectPopUp();
export const d = Data;

export const createTech = (techName) => {
  const newLi = document.createElement('LI');
  newLi.classList.add('pl-block');
  newLi.innerText = techName;
  return newLi;
};

export const addTechsToTarget = (target, techList) => {
  techList.forEach((tech) => {
    target.appendChild(createTech(tech));
  });
};

/**
 * Set the project info
 * @param {Project} projectInfo - The info in projectsData list.
 * @param {Object} target - The object we want to apply the info to.
 */
export const setInfo = (projectInfo, target) => {
  target.querySelector('.project-title').innerText = projectInfo.name;
  target.querySelector('.project-desc').innerText = projectInfo.description;
  target.style.backgroundImage = `url(${projectInfo.projectImage})`;
  target.querySelector('.btn-1').addEventListener('click', () => {
    display.openPopUp(projectInfo);
    addTechsToTarget(display.techs, projectInfo.technologies);
  });

  addTechsToTarget(target.querySelector('.pl-categories-container'), projectInfo.technologies);
};

/**
 * Creates a clone of the project template.
 * @param {Object} elementToClone - The template to clone.
 * @param {Object} target - The parent of the clone.
 */
export const createProject = (elementToClone, target) => {
  const clone = elementToClone.content.firstElementChild.cloneNode(true);
  target.appendChild(clone);
  return clone;
};

/**
 * Reads the data from projectsData and creates the projects.
 * @param {Object} elementToClone - The template to clone, it will store the data here.
 * @param {Object} target - The parent of the clone.
 */
export const readAndWriteProjects = (elementToClone, target) => {
  Data.projectData.forEach((data) => {
    if (data.name !== 'Project 7') {
      const newPro = createProject(elementToClone, target);
      setInfo(data, newPro);
    }
  });
};
