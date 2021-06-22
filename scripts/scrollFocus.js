export default class ScrollFocus {
  pageLinks = document.getElementById('page-links');

  links = this.pageLinks.children;

  // ----Sections----
  clearSection = document.getElementById('headline');

  portfolio = document.getElementById('recent-works');

  aboutMe = document.getElementById('about-me-intro');

  contactMe = document.getElementById('contact-me');

  // stores the ranges of specified sections,
  // also stores the id of the associeted element to change.
  // TODO: this dictionary obj would work
  // better as a class/struct. I can add offsets when needed for
  // strangely sized sections or other stuff (insted of hardcoding the offsets).
  // It is also a little hard to read.
  sectionRanges = {
    s0: [
      [this.clearSection.offsetTop,
        this.clearSection.offsetHeight + this.clearSection.offsetTop], null],
    s1: [
      [this.portfolio.offsetTop, this.portfolio.offsetHeight + this.portfolio.offsetTop],
      this.links[0]],
    s2: [
      [this.aboutMe.offsetTop, this.aboutMe.offsetHeight + this.aboutMe.offsetTop],
      this.links[1]],
    s3: [
      [this.aboutMe.offsetHeight + this.aboutMe.offsetTop,
        this.contactMe.offsetHeight + this.contactMe.offsetTop], this.links[2]],
    // Manual offset required!!
  };

  currentScrollFocus;

  setScrollFocusStyle = (selectedElement) => {
    Object.entries(this.links).forEach((link) => {
      link[1].classList.remove('on-view');
    });

    if (selectedElement !== null) {
      selectedElement.classList.add('on-view');
    }
  }

  // Checks current scroll position, if it is in range of a defined section setsScrollsFocusStyle
  checkRangeScrollFocus = (yPos) => {
    const isInRange = (arr) => {
      if (yPos > arr[0] && yPos < arr[1]) {
        return true;
      }
      return false;
    };

    // checks that the new section focused is different than the last one
    // so it only assigns style when needed
    const isNewFocus = (k) => {
      if (k !== this.currentScrollFocus || k === null) {
        this.currentScrollFocus = k;
        return true;
      }
      return false;
    };

    // I use v[i] because v = [range, elementToStyle] the second value tells me
    // the element I should style.
    Object.entries(this.sectionRanges).forEach(([k, v]) => {
      if (isInRange(v[0]) && isNewFocus(k)) {
        this.setScrollFocusStyle(v[1]);
      }
    });
  }
}
