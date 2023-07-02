const menuBtn = document.querySelector('.hamburger');
const menuNavMobile = document.querySelector('.nav__mobile');
const menuMobileList = document.querySelector('.nav__menu-mobile');
const menuMobileLinksArr = document.querySelectorAll('.nav__link-mobile');

const msgStatus = document.querySelector('.msg-status');

const footerYear = document.querySelector('.footer__year');
const servicesFooterYear = document.querySelector('.footer__year');

function setCurrentYear() {
	footerYear.append(new Date().getFullYear());
}

function toggleMenu() {
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

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
		// window.location.href = 'https://www.paulinastelmach.pl';
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Błąd wysyłania wiadomości';

	setTimeout(() => {
		msgStatus.classList.remove('error');
		// window.location.href = 'https://www.paulinastelmach.pl';
	}, 3000);
}

setCurrentYear();
menuBtn.addEventListener('click', toggleMenu);
navLinkHandler();
