const menu = document.getElementsByClassName('menu')[0];
const about = document.getElementsByClassName('about')[0];
const contact = document.getElementsByClassName('contact')[0];
const projects = document.getElementsByClassName('projects')[0];


menu.onclick = function(e) {
	let target = e.target.textContent;
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