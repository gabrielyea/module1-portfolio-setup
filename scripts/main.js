import MobileMenu from './mobileMenu.js';
import ScrollFocus from './scrollFocus.js';
import ProjectPopUp from './projectPopUp.js';
import { initProjects } from './setUp.js';
import {
  formRef,
  isValidMail,
} from './validation.js';
import { saveInputData, loadInputData } from './storage.js';

const mobileMenu = new MobileMenu();
const scrollFocus = new ScrollFocus();
const projectPopUp = new ProjectPopUp();

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

window.addEventListener('load', () => {
  initProjects();
  loadInputData();
});

formRef.addEventListener('keyup', () => {
  isValidMail(false);
  saveInputData();
});

formRef.addEventListener('submit', (e) => {
  if (!isValidMail(true)) {
    e.preventDefault();
  }
});