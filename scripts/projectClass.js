export default class Project {
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

export const projectsData = [
  new Project('0',
    'Project 1',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should.',
    'none',
    [
      'ruby',
      'javascript',
      'ruby',
      'html',
    ],
    'link1',
    'link2'),
  new Project('1',
    'Project 2',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should.',
    'none',
    [
      'ruby',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('2',
    'Project 3',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should.',
    'none',
    [
      'Bootstrap',
      'javascript',
      'ruby',
    ],
    'link1',
    'link2'),
  new Project('3',
    'Project 4',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should.',
    'none',
    [
      'html',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('4',
    'Project 5',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should.',
    'none',
    [
      'html',
      'javascript',
      'Bootstrap',
    ],
    'link1',
    'link2'),
];

const createTech = (techName) => {
  const newLi = document.createElement('LI');
  newLi.classList.add('pl-block');
  newLi.innerText = techName;
  return newLi;
};

export const setProjectData = (emptyProject, projectIndex) => {
  emptyProject.querySelector('#project-title').innerText = projectsData[projectIndex].name;
  emptyProject.querySelector('#project-desc').innerText = projectsData[projectIndex].description;
  emptyProject.id = `project-card-${projectIndex}`;
  projectsData[projectIndex].technologies.forEach((tech) => {
    emptyProject.querySelector('#project-techs').appendChild(createTech(tech));
  });
  return emptyProject;
};

export const displayPopProject = (popWindowRef, selectedProject) => {
  const pTitle = selectedProject.querySelector('#project-title').innerText;
  const currentPro = projectsData.find((n) => n.name === pTitle);
  popWindowRef.mainDisplay.classList.add('show');
  popWindowRef.setTitle(pTitle);
  popWindowRef.setDescription(selectedProject.querySelector('#project-desc').innerText);
  currentPro.technologies.forEach((tech) => {
    popWindowRef.addTech(createTech(tech));
  });
};