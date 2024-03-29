export default class ProjectPopUp {
  recentWorks = document.getElementById('recent-works');

  headline = document.getElementById('headline');

  aboutMe = document.getElementById('about-me-intro');

  skillTechs = document.getElementById('skill-techs');

  contactMe = document.getElementById('contact-me');

  mainDisplay = document.getElementById('pop-project');

  exitBtn = document.getElementById('pop-project-exit');

  projectTitle = document.getElementById('pop-project-title');

  techs = document.getElementById('techs');

  projectImg = document.getElementById('project-image');

  projectDesc = document.getElementById('pop-project-desc');

  liveLink = document.getElementById('live-link');

  sourceLink = document.getElementById('source-link');

  isPopClose = true;

  setTitle = (title) => {
    this.projectTitle.innerText = title;
  };

  setDescription = (desc) => {
    this.projectDesc.innerText = desc;
  };

  setProjectImage = (path) => {
    this.projectImg.src = path;
  };

  closePopUp = () => {
    this.removeChilds(this.techs);
    this.mainDisplay.classList.remove('show');
    this.toggleBlur();
  };

  openPopUp = (info) => {
    this.setTitle(info.name);
    this.setDescription(info.description);
    this.setProjectImage(info.projectImage);
    this.liveLink.setAttribute('href', info.liveLink);
    this.sourceLink.setAttribute('href', info.sourceLink);
    this.mainDisplay.classList.toggle('show');
    this.toggleBlur();
  };

  removeChilds = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  toggleModal = (info) => {
    this.setTitle(info.name);
    this.setDescription(info.description);
    this.setProjectImage(info.projectImage);
    this.mainDisplay.classList.toggle('show');
    this.toggleBlur();
  }

  // this should be on a utilities class
  // too lazy to do it now :c
  toggleBlur = () => {
    // this should be a loop... lazy :C
    this.headline.classList.toggle('blur');
    this.recentWorks.classList.toggle('blur');
    this.aboutMe.classList.toggle('blur');
    this.skillTechs.classList.toggle('blur');
    this.contactMe.classList.toggle('blur');
    this.isPopClose = !this.isPopClose;
  };
}
