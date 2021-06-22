import MobileMenu from './mobileMenu.js';
import ScrollFocus from './scrollFocus.js';
import ProjectPopUp from './projectPopUp.js';

const mobileMenu = new MobileMenu();
const scrollFocus = new ScrollFocus();
const projectPopUp = new ProjectPopUp();

const mainProjectsTarget = document.getElementById('projects-list');

const base = document.getElementById('project-card');

const projects = [];
let templates = {
  project1: [
    '<li class="highligth">',
    '<div class="project-highligth">',
    '<div class="desc-highligth">',
    '<img src="assets/project-thumbnail.png" alt="project preview">',
    '<span class="list-heading">Crime:</span>',
    '<div class="text-highligth">',
    '<h3 id="high-h3">Multi-Post Stories</h3>',
    '<p id="high-p"></p>',
    '<ul class="pl-categories-container"></ul>',
    '<button class="btn-1">See Project</button>',
    '</div>',
    '</div>',
    '</div>',
    '</li>',
  ].join(''),
  project2: [
    '<li id="project-card" class="card-works  dark">',
    '<header class="padded-content">',
    '<h3>Data Dashboard Healthcare</h3>',
    ' </header>',
    '<p class="padded-content"></p>',
    '<ul class="pl-categories-container padded-content"></ul>',
    '<h3 id="high-h3">Multi-Post Stories</h3>',
    '<p id="high-p"></p>',
    '<ul class="pl-categories-container"></ul>',
    '<button class="btn-1">See Project</button>',
    '<button class="btn-1 large-btn">See Project</button>',
    ' </li>',
  ].join(''),
};

// for (let index = 0; index < 4; index += 1) {
//   projects.push(base.cloneNode(true));
//   mainProjectsTarget.appendChild(projects[index]);
// }

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

// console.log(projectPopUp.projectTitle.innerText = "Hello");
