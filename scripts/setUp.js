import * as Utils from './projectsUtils.js';

// Template and target for clones
const mainProjectsTarget = document.getElementById('projects-list');
const projectTemplate = document.getElementById('template-1');
const specialProject = document.getElementById('template-2');

export const initProjects = () => {
  // Creates the special project
  const sP = Utils.createProject(specialProject, mainProjectsTarget);
  Utils.addTechsToTarget(sP.querySelector('.pl-categories-container'), Utils.d.projectData[6].technologies);
  sP.addEventListener('click', () => {
    Utils.display.openPopUp(Utils.d.projectData[6]);
    Utils.addTechsToTarget(Utils.display.techs, Utils.d.projectData[6].technologies);
  });
  // normal projects read and created
  Utils.readAndWriteProjects(projectTemplate, mainProjectsTarget);
};

export default 'initProjects';