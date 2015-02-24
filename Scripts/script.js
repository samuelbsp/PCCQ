$(document).ready(function() {

  var hauteurFenetre = $(window).height();	
  $( ".backgroundContenu" ).css( "height", hauteurFenetre);
  $( ".blocContenu" ).css( "height", hauteurFenetre-180);
  $( ".blocContenuFilm" ).css( "bottom", - hauteurFenetre);
  $( ".blocFilm" ).css( "top", hauteurFenetre/4.5);

if($(".blocObjectif").length > 0) {
    logoCentre();
}

setTimeout(function() {
    $( ".blocContenu" ).css( "bottom", "0px" );
}, 100);

setTimeout(function() {
    $( ".blocTitre" ).css( "left", "0px" );
      	setTimeout(function() {
      		$( ".blocContenuFilm" ).css( "bottom", "0px" );
      			setTimeout(function() {
      				$( ".blocVideo" ).css( "width", "50%" );
      					setTimeout(function() {
      						$( ".blocVote" ).css( "width", "14%" );
						}, 600);
				}, 300);
		}, 300);
}, 100);

function logoCentre(){

  $( "header" ).css( "height", hauteurFenetre);
  var hauteurMargeLogo = $(window).height()/2- $( ".blocTitre" ).height()/2-80;
  $( ".blocTitre" ).css( "margin-top", hauteurMargeLogo);
}
});	