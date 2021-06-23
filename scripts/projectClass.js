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
    'https://longdogechallenge.com/',
    'https://alwaysjudgeabookbyitscover.com/'),
  new Project('1',
    'Project 2',
    'Sometimes I stare at a door or a wall and I wonder what is this reality, why am I alive, and what is this all about?.',
    './assets/Img-Placeholder-4.png',
    [
      'ruby',
      'javascript',
    ],
    'http://eelslap.com/',
    'http://www.staggeringbeauty.com/'),
  new Project('2',
    'Project 3',
    'Its much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.',
    './assets/Img-Placeholder-5.png',
    [
      'Bootstrap',
      'javascript',
      'ruby',
    ],
    'http://corndog.io/',
    'https://smashthewalls.com/'),
  new Project('3',
    'Project 4',
    'Culpa velit anim dolor cupidatat qui fugiat commodo commodo adipisicing ad ut ut eiusmod nisi. Quis exercitation amet ex exercitation velit qui est deserunt. Nisi elit quis commodo do veniam.',
    './assets/Img-Placeholder-6.png',
    [
      'html',
      'javascript',
    ],
    'https://jacksonpollock.org/',
    'http://www.republiquedesmangues.fr/'),
  new Project('4',
    'Project 5',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should. He took one look at what was under the table and noped the hell out of there.',
    './assets/Img-Placeholder-4.png',
    [
      'html',
      'javascript',
      'Bootstrap',
    ],
    'http://corndog.io/',
    'https://longdogechallenge.com/'),
  new Project('5',
    'Project 6',
    'Excepteur elit consequat minim ea consequat cillum irure cillum nisi elit eiusmod. Non eiusmod officia culpa culpa nulla mollit occaecat ut cupidatat amet exercitation nostrud labore dolor. Lorem laborum reprehenderit esse do anim.',
    './assets/Img-Placeholder-4.png',
    [
      'html',
      'Bootstrap',
    ],
    'http://www.staggeringbeauty.com/',
    'https://smashthewalls.com/'),
  new Project('6',
    'Project 7',
    'He was so preoccupied with whether or not he could thathe failed to stop to consider if he should. He took one look at what was under the table and noped the hell out of there.',
    './assets/Img-Placeholder-3.png',
    [
      'javascript',
      'Bootstrap',
    ],
    'https://alwaysjudgeabookbyitscover.com/',
    'http://corndog.io/'),
];

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