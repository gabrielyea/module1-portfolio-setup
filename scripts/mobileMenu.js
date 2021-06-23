export default class MobileMenu {
  navBar = document.getElementById('nav');

  popMenu = document.getElementById('pop-menu');

  menuBtn = document.getElementById('burguer');

  logoBtn = document.getElementById('logo');

  popMenuLinksParent = document.getElementById('pop-menu-links');

  isMenuOpen = false;

  openMenu() {
    this.popMenu.classList.add('show');
    this.menuBtn.classList.add('show');
    this.logoBtn.style.display = 'none';
    this.navBar.style.justifyContent = 'end';
  }

  closeMenu() {
    this.popMenu.classList.remove('show');
    this.menuBtn.classList.remove('show');
    this.logoBtn.style.display = 'block';
    this.navBar.style.justifyContent = 'space-between';
  }
}
