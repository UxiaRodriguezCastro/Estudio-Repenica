	
	let fullImgBox, fullImg, titulo, bio;
	
	document.addEventListener("DOMContentLoaded", function () {
	
	
	 fullImgBox= document.getElementById("fullimgbox");
     fullImg= document.getElementById("fullimagen");
	 titulo= document.getElementById("nombreProfe");
	 bio= document.getElementById("bioProfe");

	
    });
	
	
	function openFullImg(reference){
	  fullImgBox.style.display = "flex";
	  fullImg.src = reference
	}

	function openFullScreen(nombre, biografia){
	  fullImgBox.style.display = "block";
	  titulo.innerText= nombre;
	  bio.innerText= biografia;
	}		
	
	function closeImg(){
	  fullImgBox.style.display = "none";
	}	