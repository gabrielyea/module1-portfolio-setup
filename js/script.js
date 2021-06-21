const popMenu = document.getElementById("pop-menu");
const burger = document.getElementById("burguer");

let isMenuOpen = false;

burger.addEventListener("click", () => {
	if(isMenuOpen ? closeMenu() : openMenu());
	isMenuOpen = !isMenuOpen;
});

function openMenu() {
  popMenu.classList.add("show");
  burger.classList.add("show");
}

function closeMenu() {
  popMenu.classList.remove("show");
  burger.classList.remove("show");
}

