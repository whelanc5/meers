function load_content(content, placeholder, callback) {
	//console.log(content);	
	//console.log(placeholder);
	//console.log(callback);
	var xhr= new XMLHttpRequest();
		xhr.open('GET', content, true);
		xhr.onreadystatechange= function() {
			if (this.readyState!==4) return;
			if (this.status!==200) return; // or whatever error handling you want
				document.getElementById(placeholder).innerHTML= this.responseText;
			if(callback !== undefined){
				callback();
			}
	}
	xhr.send();
	
}


function loadNavContent(){
	load_content("navContents.html","sidebar-placeholder");
}

function showNav(show){
	var elements = document.getElementsByClassName('sidebarContent');
	if(show){
		for (var i = 0; i < elements.length; i ++) {
			elements[i].style.display = 'block';
		}
		document.getElementById("sidebar").setAttribute("style","height:100vh");
		document.getElementById("showNav").style.display = 'none';
		document.getElementById("hideNav").style.display = 'block';
		
	}
	else{
			for (var i = 0; i < elements.length; i ++) {
			elements[i].style.display = 'none';
		}
		document.getElementById("sidebar").setAttribute("style","height:40px");
		document.getElementById("showNav").style.display = 'block';
		document.getElementById("hideNav").style.display = 'none';
	}
}

function filter(input){
	if(input != undefined){
		var elements = document.getElementsByClassName('thumbnail');
		{
			for (var i = 0; i < elements.length; i ++) {
				if(input == elements[i].dataset.filter){
					elements[i].style.display = 'block';
				}
				else{
					elements[i].style.display = 'none';
				}
				
			}
			
		}
	}
	
}

function setUpGallery(){
	setModal();
	if(input){
		filter(input);
		document.getElementById("galleryHeader").innerText=input;
	}
}



function setModal(){
		var elements = document.getElementsByClassName("modalbtn");
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', showModal, false);
		}
		
		var elements = document.getElementsByClassName("close");
		
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', closeModal, false);
		}
		
	
}
function showModal(e) {
  
  document.getElementById("modalImage").src = e.target.src ? e.target.src :"images/turtle.jpg";
  //document.getElementById("modalTitle").innerText = e.target.dataset.title ? e.target.dataset.title : "Not Found"; 
  document.getElementById("modalDescription").innerText = e.target.dataset.description ? e.target.dataset.description : "";  
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

load_content("nav.html","nav-placeholder",loadNavContent);
load_content("navContents.html","bottom-nav-placeholder");