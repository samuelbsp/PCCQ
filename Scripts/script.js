$(document).ready(function() {

  var hauteurFenetre = $(window).height();
  var largeurFenetre = $(window).width();	
  $( ".blocContenu" ).css( "height", hauteurFenetre-180);
  if( largeurFenetre >=1023 ) { 
    $( ".blocTitre" ).css( "left", - largeurFenetre);
    $( ".blocContenuFilm" ).css( "bottom", - hauteurFenetre);
    $( ".blocFilm" ).css( "top", hauteurFenetre/4.5);
    $( ".backgroundContenu" ).css( "height", hauteurFenetre);
  }

  var rotation = 0;

  //Facebook
  $('#mur').facebookWall({      
    id:'335778293107470',
    access_token:'804688682911965|hIlm3o0E5PYMYiu9eefaFibAGfQ'
  });

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
    }
    else{
      $( ".navHeader" ).css( "max-height", "500px" );
      $('.burgerMobile').rotate(90);
      menuMobileOuvert=true;
    }
  });
if( largeurFenetre<=780 ) {
   var monID;
   var subMenuOuvert=false;
  $( ".menu-item-has-children" ).click(function(e) {
    if (e.target.parentElement.indexOf('.menu-item-has-children')>-1){
      e.preventDefault();
    }  
    monID= this.id;
    if(subMenuOuvert==false){
      $( '#' + monID + ' .sub-menu' ).css( "max-height", "500px" );
      subMenuOuvert=true;
    }
    else{
      $( '#' + monID + ' .sub-menu' ).css( "max-height", "0px" );
      subMenuOuvert=false;
    }
  });
}
else{
    var monID;
  $( ".blocNavigation .menu-item-has-children" ).hover(function() {
    monID= this.id;
    $( '#' + monID + ' .sub-menu' ).css( "max-height", "500px" );
  }, function() {
    $( '#' + monID + ' .sub-menu' ).css( "max-height", "0px" );
  });
}

if($(".blocObjectif").length > 0) {
    logoCentre();
}

setTimeout(function() {
    $( ".blocContenu" ).css( "bottom", "0px" );
}, 100);

if( largeurFenetre >=1023 ) {
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
}

function logoCentre(){
  var hauteurMargeLogo = $(window).height()/2- $( ".blocTitre" ).height()/2;
  $( ".blocTitre" ).css( "margin-top", hauteurMargeLogo);
}
});

(function($){

    $.fn.facebookWall = function(options){

        options = options || {};

        if(!options.id){
            throw new Error('Tu as besoin de fournir un id utilisateur/page!');
        }

        if(!options.access_token){
            throw new Error('Tu as besoin de fournir un access token!');
        }


        options = $.extend({
            limit: 2   //Tu peux passer une limite au paramètre
        },options);

        // Mettre ensemble les Facebook Graph API:

        var graphUSER = 'https://graph.facebook.com/'+options.id+'/?fields=name,picture&access_token='+options.access_token+'&callback=?',
            graphPOSTS = 'https://graph.facebook.com/'+options.id+'/posts/?access_token='+options.access_token+'&callback=?&date_format=U&limit='+options.limit;

        var wall = this;

        $.when($.getJSON(graphUSER),$.getJSON(graphPOSTS)).done(function(user,posts){

            // user[0] contient les information de l'usagé (nom et image);
            // posts[0].data est un tableau avec tous les messages;

            var fb = {
                user : user[0],
                posts : []
            };

            $.each(posts[0].data,function(){

                // Nous vonlons seulement montrer les liens, les statuts, les images et les video du messages:
                if((this.type != 'link' && this.type!='status' && this.type!='photo' && this.type!='video' && this.type!="event") || !this.message)
                {
                  return true;
                }

                // Copier l'image de l'usagé
                this.from.picture = fb.user.picture.data.url;

                // Convertir le created_time (Un UNIX timestamp)
                this.created_time = relativeTime(this.created_time);

                // Convertir URL en hyperlien:
                this.message = urlHyperlinks(this.message);


                fb.posts.push(this);
            });

            // Créé une liste désordonnée des messages:
            var ul = $('<ul>').appendTo(wall);

            // Généré le modèle:
            $('#feedTpl').tmpl(fb.posts).appendTo(ul);
        });

        return this;

    };

    // Helper functions:

    function urlHyperlinks(str){
        return str.replace(/\b((http|https):\/\/\S+)/g,'<a href="$1" target="_blank">$1</a>');
    }

    function relativeTime(time){

          now = new Date();
          time = new Date(time*1000);
          var delta = now.getTime() - time.getTime();

          delta = delta/1000; //Utilise un s

          var ps, pm, ph, pd, min, hou, sec, days;
          var h= "h";

          if(delta<=10){ //Avant 10 secondes
            return "Maintenant";
          }

          if(delta>=11 && delta<=59){ //Les secondes
              ps = (delta>1) ? "s": "";
              return "Il y a "+delta+" seconde"+ps
          }

          if(delta>=60 && delta<=3599){ //Les minutes
              min = Math.floor(delta/60);
              sec = delta-(min*60);
              pm = (min>1) ? "s": "";
              ps = (sec>1) ? "s": "";
              return "Il y a "+min+" minute"+pm;
              // +" "+sec+" second"+ps
          }

          if(delta>=3600 && delta<=86399){ // Les heures
              hou = Math.floor(delta/3600);
              min = Math.floor((delta-(hou*3600))/60);
              ph = (hou>1) ? "s": "";
              pm = (min>1) ? "s": "";
              return "Il y a "+hou+" heure"+ph;
              // +" "+min+" minute"+pm
          }

          if(delta>=86400){ // Les jours
            var date_fr = moment(time).locale('fr'); //Mettre les heures en français
            return(date_fr.format('DD MMMM YYYY'+' à '+'HH')+ h + date_fr.format('mm')); // DD MMMM YYYY
          }

    }


})(jQuery);