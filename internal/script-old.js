// function $_GET(q,s) { 
//     s = s ? s : window.location.search; 
//     var re = new RegExp('&'+q+'(?:=([^&]*))?(?=&|$)','i'); 
//     return (s=s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined; 
// } 

(s = s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined; 

// Load Showdown

const showdownScript = document.createElement('script');
showdownScript.src = "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js";
document.head.appendChild(showdownScript);

// Load CSS

[...document.head.children].pop().href = "https://psygamer.github.io/abc/style.css";

// Strip Markdown

window.addEventListener('load', () => {
	const pageElements = [...document.querySelector(".markdown-body").children].slice(2);

	document.body.innerHTML = "";
	pageElements.forEach(pageElement => {
		document.body.appendChild(pageElement)
	});
})