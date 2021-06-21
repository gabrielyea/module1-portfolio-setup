const navBar = document.getElementById('nav');
const popMenu = document.getElementById('pop-menu');
const menuBtn = document.getElementById('burguer');
const logoBtn = document.getElementById('logo');
const pageLinks = document.getElementById('page-links');
const popMenuLinksParent = document.getElementById('pop-menu-links');
const links = pageLinks.children;

// ----Sections----
const clearSection = document.getElementById('headline');
const portfolio = document.getElementById('recent-works');
const aboutMe = document.getElementById('about-me-intro');
const contactMe = document.getElementById('contact-me');

// stores the ranges of specified sections, also stores the id of the associeted element to change.
// TODO: this dictionary obj would work better as a class/struct. I can add offsets when needed for
// strangely sized sections or other stuff (insted of hardcoding the offsets).
// It is also a little hard to read.
const sectionRanges = {
  s0: [[clearSection.offsetTop, clearSection.offsetHeight + clearSection.offsetTop], null],
  s1: [[portfolio.offsetTop, portfolio.offsetHeight + portfolio.offsetTop], links[0]],
  s2: [[aboutMe.offsetTop, aboutMe.offsetHeight + aboutMe.offsetTop], links[1]],
  s3: [[aboutMe.offsetHeight + aboutMe.offsetTop,
    contactMe.offsetHeight + contactMe.offsetTop], links[2]], // Manual offset required!!
};

let isMenuOpen = false;
let currentScrollFocus;

function openMenu() {
  popMenu.classList.add('show');
  menuBtn.classList.add('show');
  logoBtn.style.display = 'none';
  navBar.style.justifyContent = 'end';
}

function closeMenu() {
  popMenu.classList.remove('show');
  menuBtn.classList.remove('show');
  logoBtn.style.display = 'block';
  navBar.style.justifyContent = 'space-between';
}

function setScrollFocusStyle(selectedElement) {
  Object.entries(links).forEach((link) => {
    link[1].classList.remove('on-view');
  });

  if (selectedElement !== null) {
    selectedElement.classList.add('on-view');
  }
}

// Checks current scroll position, if it is in range of a defined section setsScrollsFocusStyle
function checkRangeScrollFocus(yPos) {
  const isInRange = (arr) => {
    if (yPos > arr[0] && yPos < arr[1]) {
      return true;
    }
    return false;
  };

  // checks that the new section focused is different than the last one
  // so it only assigns style when needed
  const isNewFocus = (k) => {
    if (k !== currentScrollFocus || k === null) {
      currentScrollFocus = k;
      return true;
    }
    return false;
  };

  // I use v[i] because v = [range, elementToStyle] the second value tells me
  // the element I should style.
  Object.entries(sectionRanges).forEach(([k, v]) => {
    if (isInRange(v[0]) && isNewFocus(k)) {
      setScrollFocusStyle(v[1]);
    }
  });
}

// ------ Events ------
menuBtn.addEventListener('click', () => {
  if (isMenuOpen ? closeMenu() : openMenu());
  isMenuOpen = !isMenuOpen;
});

window.addEventListener('scroll', () => {
  checkRangeScrollFocus(this.scrollY);
});

popMenuLinksParent.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'A') {
    closeMenu();
  }
});
