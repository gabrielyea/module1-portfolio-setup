export class Project {
  projectIndex;

  name;

  description;

  projectImage;

  technologies = [];

  liveLink;

  sourceLink;

  constructor(
    projectIndex,
    name,
    description,
    projectImage,
    technologies,
    liveLink,
    sourceLink,
  ) {
    this.projectIndex = projectIndex;
    this.name = name;
    this.description = description;
    this.projectImage = projectImage;
    this.technologies = technologies;
    this.liveLink = liveLink;
    this.sourceLink = sourceLink;
  }
}

const createTech = (techName) => {
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

// This should also work in all projecs types...
// will try to fix this later...
export const setProjectData = (emptyProject, projectIndex) => {
  const currentPro = projectsData[projectIndex];
  emptyProject.style.backgroundImage = `url(${currentPro.projectImage})`;
  emptyProject.querySelector('#project-title').innerText = currentPro.name;
  emptyProject.querySelector('#project-desc').innerText = currentPro.description;
  emptyProject.id = `project-card-${projectIndex}`;
  addTechsToTarget(emptyProject.querySelector('#project-techs'), currentPro.technologies);
  return emptyProject;
};

// TODO: due to your poor design choises we find this situation!
// >.< find a way to fix this!!!
// I think I dont need the selected project, I can find project by name
// will fix later!!
export const displayPopProject = (popWindowRef, selectedProject) => {
  const pTitle = selectedProject.querySelector('#project-title').innerText;
  const currentPro = projectsData.find((n) => n.name === pTitle);
  popWindowRef.mainDisplay.classList.add('show');
  popWindowRef.setTitle(pTitle);
  popWindowRef.setDescription(selectedProject.querySelector('#project-desc').innerText);
  popWindowRef.setProjectImage(currentPro.projectImage);
  currentPro.technologies.forEach((tech) => {
    popWindowRef.addTech(createTech(tech));
  });
  document.querySelector('#live-link').setAttribute('href', currentPro.liveLink);
  document.querySelector('#source-link').setAttribute('href', currentPro.sourceLink);
};

export const displaySpecialProject = (popWindowRef) => {
  const selectedProject = projectsData[6];
  const pTitle = selectedProject.name;
  popWindowRef.mainDisplay.classList.add('show');
  popWindowRef.setTitle(pTitle);
  popWindowRef.setDescription(selectedProject.description);
  popWindowRef.setProjectImage(selectedProject.projectImage);
  selectedProject.technologies.forEach((tech) => {
    popWindowRef.addTech(createTech(tech));
  });
  document.querySelector('#live-link').setAttribute('href', selectedProject.liveLink);
  document.querySelector('#source-link').setAttribute('href', selectedProject.sourceLink);
};

/**
 * Appends a clone element to the target element.
 *
 * @param {object} clone The html element to clone.
 * @param {object} target The would be parent of the.
 * @return {number} x raised to the n-th power.
 */
export const createProjectInPage = (clone, target) => {

};