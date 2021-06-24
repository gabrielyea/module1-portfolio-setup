import * as Utils from './projectsUtils.js';

// Template and target for clones
const mainProjectsTarget = document.getElementById('projects-list');
const projectTemplate = document.getElementById('template-1');
const specialProject = document.getElementById('template-2');

export const initProjects = () => {
  Utils.readAndWriteProjects(projectTemplate, mainProjectsTarget);
};

export default 'initProjects';