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
    './assets/Img-Placeholder-6.png',
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
    'Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?.',
    './assets/Img-Placeholder-4.png',
    [
      'ruby',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('2',
    'Project 3',
    'Its much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.',
    './assets/Img-Placeholder-5.png',
    [
      'Bootstrap',
      'javascript',
      'ruby',
    ],
    'link1',
    'link2'),
  new Project('3',
    'Project 4',
    'Culpa velit anim dolor cupidatat qui fugiat commodo commodo adipisicing ad ut ut eiusmod nisi. Quis exercitation amet ex exercitation velit qui est deserunt. Nisi elit quis commodo do veniam.',
    './assets/Img-Placeholder-6.png',
    [
      'html',
      'javascript',
    ],
    'link1',
    'link2'),
  new Project('4',
    'Project 5',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should. He took one look at what was under the table and noped the hell out of there.',
    './assets/Img-Placeholder-4.png',
    [
      'html',
      'javascript',
      'Bootstrap',
    ],
    'link1',
    'link2'),
  new Project('5',
    'Project 6',
    'Excepteur elit consequat minim ea consequat cillum irure cillum nisi elit eiusmod. Non eiusmod officia culpa culpa nulla mollit occaecat ut cupidatat amet exercitation nostrud labore dolor. Lorem laborum reprehenderit esse do anim.',
    './assets/Img-Placeholder-4.png',
    [
      'html',
      'Bootstrap',
    ],
    'link1',
    'link2'),
  new Project('6',
    'Project 7',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should. He took one look at what was under the table and noped the hell out of there.',
    './assets/Img-Placeholder-4.png',
    [
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
  emptyProject.style.backgroundImage = `url(${projectsData[projectIndex].projectImage})`;
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
  popWindowRef.setProjectImage(currentPro.projectImage);
  currentPro.technologies.forEach((tech) => {
    popWindowRef.addTech(createTech(tech));
  });
};
