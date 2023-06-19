const menuBtn = document.querySelector('.hamburger');
const menuNavMobile = document.querySelector('.nav__mobile');
const menuMobileList = document.querySelector('.nav__menu-mobile');
const menuMobileLinksArr = document.querySelectorAll('.nav__link-mobile');

const contactForm = document.forms.contactFrom;
const { contactName, company, email, phone } = document.forms.contactFrom;
const formBtn = document.getElementById('form-btn');

const footerYear = document.querySelector('.footer__year');

const servicesFooterYear = document.querySelector('.footer__year');

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

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Email.send({
	// 	Host: 'smtp.elasticemail.com',
	// 	Username: 'plnstlmch@gmail.com',
	// 	Password: 'password',
	// 	To: 'plnstlmch@gmail.com',
	// 	From: email.value,
	// 	Subject: 'Nowa wiadomość ze strony blizniak-szklo.com',
	// 	Body: 'And this is the body',
	// }).then((message) => alert(message));

	console.log(contactName.value + email.value);
	form.reset();
});

setCurrentYear();
menuBtn.addEventListener('click', toogleMenu);
navLinkHandler();
