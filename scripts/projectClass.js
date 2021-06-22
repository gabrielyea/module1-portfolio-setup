export default class Project {
  name;

  description;

  projectImage;

  technologies;

  liveLink;

  sourceLink;

  constructor(
    name,
    description,
    projectImage,
    technologies,
    liveLink,
    sourceLink,
  ) {
    this.name = name;
    this.description = description;
    this.projectImage = projectImage;
    this.technologies = technologies;
    this.liveLink = liveLink;
    this.sourceLink = sourceLink;
  }
}

const projectsData = [
  new Project('Project 1',
    'He was so preoccupied with whether or not he could that he failed to stop to consider if he should.',
    'none',
    [
      'ruby',
      'javascript',
    ],
    'link1',
    'link2'),
];

console.log(projectsData);