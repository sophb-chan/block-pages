let translated = false;

function translateElemnt() {
	if (translated) {
		// console.log('translateElemnt, already translated');
		return;
	}
	translated = true;

	let userLang = navigator.language || navigator.userLanguage;
	if (userLang !== 'zh-TW')
		userLang = 'en';
	let attributeName = `d-trans-${userLang}`;
	// console.log('translateElemnt, attributeName: ', attributeName);
	document.querySelectorAll(`[${attributeName}]`).forEach(el => {
		// console.log(`translateElemnt ${attributeName}, el: `, el);
		el.innerHTML = el.getAttribute(attributeName);
	});

	let year = new Date().getFullYear();
	document.querySelectorAll('.year-insert').forEach(el => {
		// console.log(`translateElemnt, MutationObserver, year-insert, el: `, el);
		el.innerHTML = year;
		el.classList.remove('year-insert');
		el.classList.add('year-inserted');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	translateElemnt();
});
