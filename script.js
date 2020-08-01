const main = document.getElementsByClassName('main')[0];
const title = document.getElementsByTagName('h3')[0];
const menu = document.getElementsByClassName('menu')[0];
const about = document.getElementsByClassName('about')[0];
const contact = document.getElementsByClassName('contact')[0];
const projects = document.getElementsByClassName('projects')[0];

main.onclick = function(e) {
	if (e.target.className === 'particles-js-canvas-el') {
		let children = menu.children;
		
		menu.classList.remove('show');
		for (let i = 0; i < children.length; ++i) {
			children[i].classList.remove('show');
		}
		about.classList.remove('show');
		contact.classList.remove('show');
		projects.classList.remove('show');
	}
}

title.onclick = function(e) {
	menu.classList.add('show');
}

menu.onclick = function(e) {
	let target = e.target.textContent;
	let children = e.currentTarget.children;
	for (let i = 0; i < children.length; ++i) {
		if (children[i].textContent === target) {
			children[i].classList.add('show');
		} else {
			children[i].classList.remove('show');
		}
	}
	if (target === 'about') {
		about.classList.add('show');
		projects.classList.remove('show');
		contact.classList.remove('show');
	} else if (target === 'contact') {
		contact.classList.add('show');
		projects.classList.remove('show');
		about.classList.remove('show');
	} else if (target === 'projects') {
		projects.classList.add('show');
		contact.classList.remove('show');
		about.classList.remove('show');
	}
}