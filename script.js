window.addEventListener('load', () => {
	const pageElements = [...document.querySelector(".markdown-body").children].slice(2);

	document.body.innerHTML = "";
	pageElements.forEach(pageElement => {
		document.body.appendChild(pageElement)
	});

	[...document.head.children].pop().href = "https://psygamer.github.io/abc/style.css";
})