/*=============== SHOW MENU ===============*/
const bar = document.querySelector('#bar');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const header = document.querySelector('#header');
const dark = document.querySelector('#dark-mode');


bar.addEventListener('click', () => menu.classList.add('show-menu'));

/*=============== REMOVE MENU MOBILE ===============*/
close.addEventListener('click', () => menu.classList.remove('show-menu'));

/*=============== CHANGE BACKGROUND HEADER ===============*/
document.addEventListener('scroll', () => window.scrollY > 140 ? header.classList.add("bg-nav") : header.classList.remove("bg-nav"))
/*=============== SHOW SCROLL UP ===============*/ 
dark.addEventListener("click", () => {
	if(document.body.classList.contains("dark-theme")){
		dark.classList.remove("ri-moon-line");
		dark.classList.add("ri-sun-line");		
		document.body.classList.remove("dark-theme")
	} else {
		dark.classList.remove("ri-sun-line");
		dark.classList.add("ri-moon-line");
		document.body.classList.add("dark-theme")
	}

})