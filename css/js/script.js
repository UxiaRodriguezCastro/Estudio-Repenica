	
	let fullImgBox, fullImg, titulo, bio;
	
	document.addEventListener("DOMContentLoaded", function () {
	
	
	 fullImgBox= document.getElementById("fullimgbox");
	 fullImgBox2= document.getElementById("fullimgbox2");
     fullImg= document.getElementById("fullimagen");
	 titulo= document.getElementById("nombreProfe");
	 bio= document.getElementById("bioProfe");
	 titulo2= document.getElementById("nombreProfe2");
	 bio2= document.getElementById("bioProfe2");
	
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
	
	function openFullScreen2(nombre, biografia){
		fullImgBox2.style.display = "block";
		titulo2.innerText= nombre;
		bio2.innerText= biografia;
	  }	
	
	function closeImg(){
	  fullImgBox.style.display = "none";
	  fullImgBox2.style.display = "none";
	}	