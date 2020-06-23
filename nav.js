const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const buttonHeader = header.querySelector('button');
const body = document.body;
// for modal
const modal = document.createElement('div');
modal.setAttribute('id', 'modal');

function respondWindowSize(size) {
	if (size.matches) {
		header.removeChild(nav);
		modal.appendChild(nav);
		document.body.appendChild(modal);
	} else {
		header.insertBefore(nav, buttonHeader);
		document.body.removeChild(modal)
	}
}

let windowSize = window.matchMedia("(max-width: 375px)");
respondWindowSize(windowSize);
windowSize.addListener(respondWindowSize);

function displayNav(e) {
	if (modal.style.display  === '') {
		modal.style.display = 'block';
		e.target.src = 'images/icon-close.svg';
		body.style.overflow = 'hidden';
	} else {
		modal.style.display = '';
		e.target.src = 'images/icon-hamburger.svg';
		body.style.overflow = 'scroll';
	}
}

navToggle.addEventListener('click', displayNav);