export default class ProjectPopUp {
  mainDisplay = document.getElementById('pop-project');

  exitBtn = document.getElementById('pop-project-exit');

  projectTitle = document.getElementById('pop-project-title');

  techs = document.getElementById('techs');

  projectImg = document.getElementById('project-img');

  projectDesc = document.getElementById('pop-project-desc');

  liveLink = document.getElementById('like-link');

  sourceLink = document.getElementById('source-link');

  setTitle = (title) => {
    this.projectTitle.innerText = title;
  }

  setDescription = (desc) => {
    this.projectDesc.innerText = desc;
  }

  addTech = (tech) => {
    this.techs.appendChild(tech);
  }
  // setTechs = (techs) => {

  // }

  // set current = (desc) => {
  //   this.projectDesc.innerText = desc;
  // }
}