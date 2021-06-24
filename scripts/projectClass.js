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
