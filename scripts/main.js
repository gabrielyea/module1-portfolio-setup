import MobileMenu from './mobileMenu.js';
import ScrollFocus from './scrollFocus.js';
import ProjectPopUp from './projectPopUp.js';
import * as ProjectData from './projectClass.js';

const mobileMenu = new MobileMenu();
const scrollFocus = new ScrollFocus();
const projectPopUp = new ProjectPopUp();

const mainProjectsTarget = document.getElementById('projects-list');

const base = document.getElementById('template');

for (let index = 0; index < 5; index += 1) {
  const clone = base.content.firstElementChild.cloneNode(true);
  mainProjectsTarget.appendChild(ProjectData.setProjectData(clone, index))
    .addEventListener('click', (source) => {
      ProjectData.displayPopProject(projectPopUp, source.target);
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
