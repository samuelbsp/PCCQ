$(document).ready(function() {

  var hauteurFenetre = $(window).height();
  var largeurFenetre = $(window).height();	
  $( ".backgroundContenu" ).css( "height", hauteurFenetre);
  $( ".blocTitre" ).css( "left", - largeurFenetre);
  $( ".blocContenu" ).css( "height", hauteurFenetre-180);
  $( ".blocContenuFilm" ).css( "bottom", - hauteurFenetre);
  $( ".blocFilm" ).css( "top", hauteurFenetre/4.5);

  var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({
      '-webkit-transform' : 'rotate('+ degrees +'deg)',
      '-moz-transform' : 'rotate('+ degrees +'deg)',
      '-ms-transform' : 'rotate('+ degrees +'deg)',
      'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

  var menuMobileOuvert=false;
  $( ".burgerMobile" ).click(function() {
    if(menuMobileOuvert==true){
      $( ".navHeader" ).css( "max-height", "0px" );
      $('.burgerMobile').rotate(0);
      menuMobileOuvert=false;
      setTimeout(function() {
        $( ".navHeader" ).css( "display", "none" );
      }, 500);
    }
    else{
      $( ".navHeader" ).css( "display", "block" );
      setTimeout(function() {
        $( ".navHeader" ).css( "max-height", "500px" );
        $('.burgerMobile').rotate(90);
        menuMobileOuvert=true;
      }, 100);
    }
  });

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
  var hauteurMargeLogo = $(window).height()/2- $( ".blocTitre" ).height()/2;
  $( ".blocTitre" ).css( "margin-top", hauteurMargeLogo);
}
});	