function load_content(content, placeholder, callback) {
	console.log(content);
	var xhr= new XMLHttpRequest();
		xhr.open('GET', content, true);
		xhr.onreadystatechange= function() {
			if (this.readyState!==4) return;
			if (this.status!==200) return; // or whatever error handling you want
				document.getElementById(placeholder).innerHTML= this.responseText;
				if(callback !== undefined){
					console.log("calling");
					callback();
				}
	}
	xhr.send();
	
}


function showNav(show){
	console.log(show);
	if(show)
		document.getElementById("sidebar").style.display="block";
	else
		document.getElementById("sidebar").style.display="none";
}


function setModal(){
		var elements = document.getElementsByClassName("modalbtn");
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', showModal, false);
		}
		
		var elements = document.getElementsByClassName("close");
		
		for (var i = 0; i < elements.length; i++) {
			console.log(i);
			elements[i].addEventListener('click', closeModal, false);
		}
		
	
}
function showModal(e) {
  
  //document.getElementById("modalImage").src = e.target.dataset.file ? e.target.dataset.file :"images/turtle.jpg";
  //document.getElementById("modalTitle").innerText = e.target.dataset.title ? e.target.dataset.title : "Not Found"; 
  //document.getElementById("modalDescription").innerText = e.target.dataset.description ? e.target.dataset.description : "";  
  let modal = document.getElementById("merrModal");
  modal.style.display = "block";
}

window.onclick = function(event) {
   let modal = document.getElementById("merrModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var closeModal = function() {
	let modal = document.getElementById("merrModal");
	modal.style.display = "none";
}
