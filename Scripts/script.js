$(document).ready(function() {

  var hauteurFenetre = $(window).height();
  var largeurFenetre = $(window).height();	
  $( ".backgroundContenu" ).css( "height", hauteurFenetre);
  $( ".blocTitre" ).css( "left", - largeurFenetre);
  $( ".blocContenu" ).css( "height", hauteurFenetre-180);
  $( ".blocContenuFilm" ).css( "bottom", - hauteurFenetre);
  $( ".blocFilm" ).css( "top", hauteurFenetre/4.5);


  /*var monID;
  $( ".menu-item-has-children" ).hover(function() {
    monID= this.id;
    $( '#sous'+monID ).css( "max-height", "500px" );
  }, function() {
    $( '#sous'+monID ).css( "max-height", "0px" );
  });*/
  var monID;
  $( ".menu-item-has-children" ).hover(function() {
    monID= this.id;
    $( '#' + monID + ' .sub-menu' ).css( "max-height", "500px" );
  }, function() {
    $( '#' + monID + ' .sub-menu' ).css( "max-height", "0px" );
  });

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
      				$( ".blocVideo" ).css( "width", "45%" );
      				$( ".blocVideo" ).css( "padding", "0.8%" );
      				$( "iframe" ).css( "opacity", "1" );
      					setTimeout(function() {
      						$( ".blocVote" ).css( "width", "180px" );
						}, 600);
				}, 300);
		}, 300);
}, 100);

function logoCentre(){

  $( "header" ).css( "height", hauteurFenetre);
  var hauteurMargeLogo = $(window).height()/2- $( ".blocTitre" ).height()/2;
  $( ".blocTitre" ).css( "margin-top", hauteurMargeLogo);
}
});	