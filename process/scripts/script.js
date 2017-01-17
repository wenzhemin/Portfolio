$(document).ready(function(){

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
    
    
// DATA.JSON //


    
    $.getJSON('data.json', function(info) {
        
        var output='';
        for (var i = 0; i <= info.links.length-1; i++) {
            for (key in info.links[i]) {
                if (info.links[i].hasOwnProperty(key)) {
                    output += '<li>' +
                    '<a href = "' + info.links[i][key] +
                    '">' + key + '</a>';
                    '</li>';
                }
            }
        }
        
        var update = document.getElementById('links');
        update.innerHTML = output;
   
    }); // get JSON
}); // ready
