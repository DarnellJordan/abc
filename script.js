const backgroundColor = "#1C1C1C"

document.body.append(`
<style>
	body {
		background-color: ${backgroundColor}; 
	}
	
	body * {
		display:none;
	}
</style>
`)

window.addEventListener('load', () => {
	const pageElements = [...document.querySelector(".markdown-body").children].slice(2);

	document.body.innerHTML = "";
	pageElements.forEach(pageElement => {
		document.body.appendChild(pageElement)
	});

	[...document.head.children].pop().href = "https://psygamer.github.io/abc/style.css";
})