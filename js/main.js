const menuBtn = document.querySelector('.hamburger');
const menuNavMobile = document.querySelector('.nav__mobile');
const menuMobileList = document.querySelector('.nav__menu-mobile');
const menuMobileLinksArr = document.querySelectorAll('.nav__link-mobile');

const form = document.forms.contactFrom;
const { name, company, email, phone } = document.forms.contactFrom;
const formBtn = document.getElementById('form-btn');

const footerYear = document.querySelector('.footer__year');

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

form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(name.value + email.value);
	form.reset();
});

setCurrentYear();
menuBtn.addEventListener('click', toogleMenu);
navLinkHandler();
