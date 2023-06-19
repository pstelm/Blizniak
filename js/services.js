const servicesMenuBtn = document.querySelector('#services-hamburger');
const servicesMenuNavMobile = document.querySelector('#services-nav__mobile');
const menuMobileLinksArr = document.querySelectorAll('.nav__link-mobile');

const footerYear = document.querySelector('.footer__year');

// const servicesFooterYear = document.querySelector('.footer__year');

function setCurrentYear() {
	footerYear.append(new Date().getFullYear());
}

function toogleMenu() {
	if (servicesMenuBtn.classList.contains('is-active')) {
		servicesMenuBtn.classList.remove('is-active');
		servicesMenuNavMobile.classList.remove('is-visible');
	} else {
		servicesMenuBtn.classList.add('is-active');
		servicesMenuNavMobile.classList.add('is-visible');
	}
}

function navLinkHandler() {
	menuMobileLinksArr.forEach((link) => {
		link.addEventListener('click', () => {
			servicesMenuBtn.classList.remove('is-active');
			servicesMenuNavMobile.classList.remove('is-visible');
		});
	});
}

setCurrentYear();
servicesMenuBtn.addEventListener('click', toogleMenu);
navLinkHandler();
