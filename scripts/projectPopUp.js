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

  liveLink = document.getElementById('like-link');

  sourceLink = document.getElementById('source-link');

  isPopClose = true;

  setTitle = (title) => {
    this.projectTitle.innerText = title;
  }

  setDescription = (desc) => {
    this.projectDesc.innerText = desc;
  }

  addTech = (tech) => {
    this.techs.appendChild(tech);
  }

  setProjectImage = (path) => {
    this.projectImg.src = path;
  }

  closePopUp = () => {
    this.removeChilds(this.techs);
    this.mainDisplay.classList.remove('show');
    this.toggleBlur();
  }

  removeChilds = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };

  // this should be on a utilities class
  // too lazy to do it now :c
  toggleBlur = () => {
    // this should be a loop... lazy :C
    if (this.isPopClose) {
    //   this.headline.classList.add('blur');
    //   this.recentWorks.classList.add('blur');
    //   this.aboutMe.classList.add('blur');
    //   this.skillTechs.classList.add('blur');
    //   this.contactMe.classList.add('blur');
    // } else {
    //   this.headline.classList.remove('blur');
    //   this.recentWorks.classList.remove('blur');
    //   this.aboutMe.classList.remove('blur');
    //   this.skillTechs.classList.remove('blur');
    //   this.contactMe.classList.remove('blur');
    }
    this.isPopClose = !this.isPopClose;
  }
}
