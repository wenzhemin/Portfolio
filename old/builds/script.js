$(document).ready(function(){

 
$.getJSON('data.json', function(data) {
        $('#intro').html(data.intro);
         });
        
 
 $.getJSON('projects.json', function(data) {

        var output='';
        $.each(data, function(key, val) {
              output += '<h4>' + val.project_number + '</h4>';
              output += '<a href="' + val.project_url + '">' + '<span>';
              output += '<h2>' + val.project_title + '</h2>';
              output += '<p>' + val.project_year + ' ' + val.info + '</p></span></a>';  
              });
              output += '';

        $('#projekter').append(output);

    }); // get JSON
    
    
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