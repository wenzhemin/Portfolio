$(document).ready(function(){

 
$.getJSON('data.json', function(data) {
        $('#intro').append(data.intro);
         });
        
    
    
// LIGHTBOX WITH IMAGEZOOM//
var pictures = document.querySelectorAll('article picture');

pictures.forEach(function( pic ){
  pic.addEventListener('click', function( e ){
     this.classList.toggle('lightbox');
  });
});

// GREETING //
var tid = new Date().getHours();
	var besked;
	var morgen = ('godmorgen');
    var formiddag = ('godformiddag');
	var dag = ('goddag');
	var aften = ('godaften');

	if (tid >= 0 && tid < 10) {
		besked = morgen; 

    } else if (tid >= 10 && tid < 12) {
		besked = formiddag;
        
	} else if (tid >= 12 && tid < 17) {
		besked = dag;

	} else if (tid >= 17 && tid < 24) {
		besked = aften;
	}

	$('.greeting').append(besked);
    
}); // ready
