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

const init = () => {
  for (let index = 0; index < 5; index += 1) {
    const clone = base.content.firstElementChild.cloneNode(true);
    // Inits and fills projects on page
    mainProjectsTarget.appendChild(ProjectData.setProjectData(clone, index))
      .addEventListener('click', (source) => {
        // Display projects opens the pop up, maby it should be in its own class
        // but already had the methods on ProjectData, better design needed!!
        ProjectData.displayPopProject(projectPopUp, source.target);
        projectPopUp.toggleBlur();
      });
  }

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
};

window.addEventListener('load', init());