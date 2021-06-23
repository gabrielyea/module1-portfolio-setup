import MobileMenu from './mobileMenu.js';
import ScrollFocus from './scrollFocus.js';
import ProjectPopUp from './projectPopUp.js';
import * as ProjectData from './projectClass.js';

const mobileMenu = new MobileMenu();
const scrollFocus = new ScrollFocus();
const projectPopUp = new ProjectPopUp();

// Template and target for clone
const mainProjectsTarget = document.getElementById('projects-list');
const base = document.getElementById('template');

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
