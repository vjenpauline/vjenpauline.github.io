// WITH THE HELP OF: https://youtu.be/ZNILtv_onSE

// For the parallax effect
window.addEventListener("scroll", () => {
	let scroll = scrollY;
	const section = document.querySelector("section");
	const overlay = document.querySelector(".overlay");
	const img = document.querySelector(".bg-border");

	section.style.backgroundSize = `${100 + (scroll * 0.1)}%`; // zooms in on inner photo
	img.style.backgroundSize = `${100 + (scroll / 5)}%`; // outer photo (leafy border) zoom in
	overlay.style.background = `rgba(0, 0, 0, ${scroll * 1.2 / window.innerHeight})` // darkens background on scroll
})

$(window).scroll(function () { // HIDES/SHOWS INTRO LOGO OR TEXT ON SCROLL 
	$(".hero-text").css("opacity", 1 - $(window).scrollTop() / 100);
	$(".next-text").css("opacity", 0 + $(window).scrollTop() / 150);
});


var flag = true;
function menuShow() { // CHANGES Z-INDEX OF SECTION FOR FULL-PAGE MENU WHEN SIDE BUTTON IS CLICKED
	let change = document.getElementById("hidden");
	change.style.zIndex = flag ? "150" : "";
	flag = !flag;
}

// WITH THE HELP OF: https://codepen.io/jhonnyizidoro/pen/pQRzmP

document.addEventListener('DOMContentLoaded', () => {

	const previousButton = document.querySelector('.previous'); // FOR PREVIOUS BUTTON
	const nextButton = document.querySelector('.next'); // FOR NEXT BUTTON
	const content = document.querySelector('.carousel .content');
	const totalItems = document.querySelectorAll('.carousel .content >*').length - 1;
	let activeItem = 0;

	previousButton.addEventListener('click', () => {
		if (activeItem === 0) {
			activeItem = totalItems;
			content.style.transform = `translateX(-${totalItems * 100}%)`;
		} else {
			activeItem--;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}
	});

	nextButton.addEventListener('click', () => {
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		} else {
			activeItem = 0; // GOES BACK TO START
			content.style.transform = `none`;
		}
	});

});

// WITH THE HELP OF: https://codepen.io/rodvan/embed/Dyjway?theme-id=modal

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id))
		return; js = d.createElement(s); // INTEGRATES FACEBOOK FEATURES TO WEBSITE
	js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
}

	(document, 'script', 'facebook-jssdk'
));