const popMenu = document.getElementById('pop-menu');
const burger = document.getElementById('burguer');

burger.addEventListener('click', openMenu());

function openMenu() {
	popMenu.classList.add('show');
	console.log("checking")
}