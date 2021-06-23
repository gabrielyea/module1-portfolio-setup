import MobileMenu from './mobileMenu.js';
import ScrollFocus from './scrollFocus.js';
import ProjectPopUp from './projectPopUp.js';
import * as ProjectData from './projectClass.js';

const mobileMenu = new MobileMenu();
const scrollFocus = new ScrollFocus();
const projectPopUp = new ProjectPopUp();

// Template and target for clones
const mainProjectsTarget = document.getElementById('projects-list');
const base = document.getElementById('template-1');
const specialProject = document.getElementById('template-2');

// I only need this for the main project!
// Fix needed, one function should be able to handle both cases!
// Use optional arguments!!!
const createSpecialProject = () => {
  const clone = specialProject.content.firstElementChild.cloneNode(true);
  clone.querySelector('#high-h3').innerText = ProjectData.projectsData[6].name;
  clone.querySelector('#high-p').innerText = ProjectData.projectsData[6].description;
  ProjectData.addTechsToTarget(clone.querySelector('.pl-categories-container'), ProjectData.projectsData[6].technologies);
  clone.querySelector('.btn-1').addEventListener('click', () => {
    ProjectData.displaySpecialProject(projectPopUp);
    projectPopUp.toggleBlur();
  });
  mainProjectsTarget.appendChild(clone);
};

const setProjectsUp = () => {
  // sets project data and events
  for (let index = 0; index < 6; index += 1) {
    const clone = base.content.firstElementChild.cloneNode(true);
    const filledProject = ProjectData.setProjectData(clone, index);
    // Inits and fills projects on page
    mainProjectsTarget.appendChild(filledProject);
    filledProject.querySelector('.btn-1').addEventListener('click', () => {
      ProjectData.displayPopProject(projectPopUp, filledProject);
      projectPopUp.toggleBlur();
    });
  }
};

// This will be called on load
const init = () => {
  createSpecialProject();
  setProjectsUp();
};

// ------ Events ------
mobileMenu.menuBtn.addEventListener('click', () => {
  if (mobileMenu.isMenuOpen ? mobileMenu.closeMenu() : mobileMenu.openMenu());
  mobileMenu.isMenuOpen = !mobileMenu.isMenuOpen;
});

mobileMenu.popMenuLinksParent.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'A') {
    mobileMenu.closeMenu();
  }
});

window.addEventListener('scroll', () => {
  scrollFocus.checkRangeScrollFocus(window.scrollY);
});

projectPopUp.exitBtn.addEventListener(('click'), () => {
  projectPopUp.closePopUp();
});

window.addEventListener('load', init());
