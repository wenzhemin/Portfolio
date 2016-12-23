// LIGHTBOX WITH IMAGEZOOM//
var pictures = document.querySelectorAll('article picture');

pictures.forEach(function( pic ){
  pic.addEventListener('click', function( e ){
     this.classList.toggle('lightbox');
  });
});