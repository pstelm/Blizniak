const footerYear = document.querySelector('.footer__year');
const menuBtn = document.querySelector('.hamburger');
const menuNavMobile = document.querySelector('.nav__mobile');
const menuMobileList = document.querySelector('.nav__menu-mobile');
const menuMobileLinksArr = document.querySelectorAll('.nav__link-mobile');

function setCurrentYear() {
	footerYear.append(new Date().getFullYear());
}

function toogleMenu() {
	if (menuBtn.classList.contains('is-active')) {
		menuBtn.classList.remove('is-active');
		menuNavMobile.classList.remove('is-visible');
	} else {
		menuBtn.classList.add('is-active');
		menuNavMobile.classList.add('is-visible');
	}
}

function navLinkHandler() {
	menuMobileLinksArr.forEach((link) => {
		link.addEventListener('click', () => {
			menuBtn.classList.remove('is-active');
			menuNavMobile.classList.remove('is-visible');
		});
	});
}

setCurrentYear();
menuBtn.addEventListener('click', toogleMenu);
navLinkHandler();
