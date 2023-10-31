
let fullImgBox, fullImg, titulo, bio, fullImgBox2, titulo2, bio2, x, idioma, url;

document.addEventListener("DOMContentLoaded", function () {


	fullImgBox = document.getElementById("fullimgbox");
	fullImgBox2 = document.getElementById("fullimgbox2");
	fullImg = document.getElementById("fullimagen");
	titulo = document.getElementById("nombreProfe");
	bio = document.getElementById("bioProfe");
	titulo2 = document.getElementById("nombreProfe2");
	bio2 = document.getElementById("bioProfe2");
	x = document.getElementById("myTopnav");
	url = window.location.pathname;
});


function openFullImg(reference) {
	fullImgBox.style.display = "flex";
	fullImg.src = reference;
	document.body.style.overflow = "hidden";
}

function openFullScreen(nombre, biografia) {
	document.body.style.overflow = "hidden";
	fullImgBox.style.display = "block";
	titulo.innerText = nombre;
	bio.innerText = biografia;
}

function openFullScreen2(nombre, biografia) {
	document.body.style.overflow = "hidden";
	fullImgBox2.style.display = "block";
	titulo2.innerText = nombre;
	bio2.innerText = biografia;
}

function closeImg() {
	document.body.style.overflow = "auto";
	fullImgBox.style.display = "none";
	fullImgBox2.style.display = "none";
}

function menuFunction() {
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function countryHandler(value) {
	if (value == "español") {
		location.href = "es/" + url.substring(url.lastIndexOf('/') + 1);
	} else {
		location.href = "../" + url.substring(url.lastIndexOf('/') + 1);

	}
}
