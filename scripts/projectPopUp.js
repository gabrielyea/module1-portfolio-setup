export default class ProjectPopUp {
  mainDisplay = document.getElementById('pop-project');

  exitBtn = document.getElementById('pop-project-exit');

  projectTitle = document.getElementById('pop-project-title');

  techs = document.getElementById('techs');

  projectImg = document.getElementById('project-image');

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

  setProjectImage = (path) => {
    this.projectImg.src = path;
  }

  closePopUp = () => {
    this.removeChilds(this.techs);
    this.mainDisplay.classList.remove('show');
  }

  removeChilds = (parent) => {
    while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
  };
}

const myPop = new ProjectPopUp();
myPop.exitBtn.onclick = () => {
  myPop.closePopUp();
};

// myPop.mainDisplay.onclick = (e) => {
//   console.log(e.target, myPop.mainDisplay)
//   if (e.target.parent !== myPop.mainDisplay) {
//     myPop.closePopUp();
//   }
// };
