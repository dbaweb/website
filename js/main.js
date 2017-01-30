(function ($) {
	

	$(document).ready(function() {

		
		

		canvas.init();

		// Animate.css
		
		// Main section
		$('.line_up').addClass('animated slideInLeft');
		$('.line_down').addClass('animated slideInRight');
		$('.web_dev').addClass('animated slideInUp');
		$('.anim_adb').addClass('animated slideInDown');

		// FullPage.js

		$('#fullpage').fullpage({
			anchors:['Home', 'Skills', 'Experience','Contact'],
			navigation: true,
        	navigationPosition: 'right',
        	showActiveTooltip: false,
        	controlArrows: false,
        	slidesNavigation: true,
       		slidesNavPosition: 'bottom',
        	onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            // Animate.css per section

            //after leaving section 1
            if(index == 1 && direction =='down'){

            	// addClass
            	// 
            	// Profil
            	$('#profil_anim_img').addClass('animated slideInLeft');
	            $('#profil_anim_h1').addClass('animated slideInLeft');
	            $('#profil_anim_h2').addClass('animated slideInLeft');
	            $('#profil_anim_p').addClass('animated slideInLeft');
	            $('#profil_anim_div').addClass('animated slideInLeft');

	            //Skills
	            $('.skills_div').addClass('animated slideInRight');

	            // RemoveClass
	            // 
	            // Main
	            $('.line_up').removeClass('animated slideInLeft');
				$('.line_down').removeClass('animated slideInRight');
				$('.web_dev').removeClass('animated slideInUp');
				$('.anim_adb').removeClass('animated slideInDown');
                
                console.log("Going to section 2!");
            }
            //after leaving section 2
            if(index == 2 && direction =='down'){

            	// addClass
            	// 
            	// Experience
            	$('.left').addClass('animated slideInLeft');
            	$('.right').addClass('animated slideInRight');
            	$('.anim_expe_p').addClass('animated slideInLeft');
            	$('.anim_expe_h1').addClass('animated slideInLeft');
            	$('.anim_expe_span').addClass('animated slideInLeft');
            	$('.anim_expe_ul').addClass('animated slideInLeft');
            	$('.anim_expe_href').addClass('animated slideInRight');


            	// RemoveClass
            	// 
            	// Profil
            	$('#profil_anim_img').removeClass('animated slideInLeft');
	            $('#profil_anim_h1').removeClass('animated slideInLeft');
	            $('#profil_anim_h2').removeClass('animated slideInLeft');
	            $('#profil_anim_p').removeClass('animated slideInLeft');
	            $('#profil_anim_div').removeClass('animated slideInLeft');

	            //Skills
	            $('.skills_div').removeClass('animated slideInRight');
                
                console.log("Going to section 3!");
            }

            else if(index == 2 && direction == 'up'){

            	// addClass
            	$('.line_up').addClass('animated slideInLeft');
				$('.line_down').addClass('animated slideInRight');
				$('.web_dev').addClass('animated slideInUp');
                
                // RemoveClass
                // 
                // Profil
                $('#profil_anim_img').removeClass('animated slideInLeft');
	            $('#profil_anim_h1').removeClass('animated slideInLeft');
	            $('#profil_anim_h2').removeClass('animated slideInLeft');
	            $('#profil_anim_p').removeClass('animated slideInLeft');
	            $('#profil_anim_div').removeClass('animated slideInLeft');

	            //Skills
	            $('.skills_div').removeClass('animated slideInRight');



	            console.log("Going to section 2 !");

            }
            //after leaving section 3
            if(index == 3 && direction =='down'){
            	 // removeClass
	            // 
	            // Experience
	            $('.left').removeClass('animated slideInLeft');
            	$('.right').removeClass('animated slideInRight');
            	$('.anim_expe_p').removeClass('animated slideInLeft');
            	$('.anim_expe_h1').removeClass('animated slideInLeft');
            	$('.anim_expe_span').removeClass('animated slideInLeft');
            	$('.anim_expe_ul').removeClass('animated slideInLeft');
            	$('.anim_expe_href').removeClass('animated slideInRight');

            	// addClass
            	// 
            	// Contact
            	$('.anim_contact_h1').addClass('animated slideInRight');
            	$('.anim_contact_h3').addClass('animated slideInRight');
            	$('.anim_contact_div').addClass('animated slideInRight');


                console.log("Going to section 4!");
            }

            else if(index == 3 && direction == 'up'){

            	// addClass
            	// 
            	// Profil
            	$('#profil_anim_img').addClass('animated slideInLeft');
	            $('#profil_anim_h1').addClass('animated slideInLeft');
	            $('#profil_anim_h2').addClass('animated slideInLeft');
	            $('#profil_anim_p').addClass('animated slideInLeft');
	            $('#profil_anim_div').addClass('animated slideInLeft');

	            //Skills
	            $('.skills_div').addClass('animated slideInRight');

	            // removeClass
	            // 
	            // Experience
	            $('.left').removeClass('animated slideInLeft');
            	$('.right').removeClass('animated slideInRight');
            	$('.anim_expe_p').removeClass('animated slideInLeft');
            	$('.anim_expe_h1').removeClass('animated slideInLeft');
            	$('.anim_expe_span').removeClass('animated slideInLeft');
            	$('.anim_expe_ul').removeClass('animated slideInLeft');
            	$('.anim_expe_href').removeClass('animated slideInRight');
                
                console.log("Going to section 2 !");
            }
            //after leaving section 4
			if(index == 4 && direction == 'up'){
				
				// addClass
				// 
				// Experience
            	$('.left').addClass('animated slideInLeft');
            	$('.right').addClass('animated slideInRight');
            	$('.anim_expe_p').addClass('animated slideInLeft');
            	$('.anim_expe_h1').addClass('animated slideInLeft');
            	$('.anim_expe_span').addClass('animated slideInLeft');
            	$('.anim_expe_ul').addClass('animated slideInLeft');
            	$('.anim_expe_href').addClass('animated slideInRight');

				// removeClass
				// 
				// Contact
				$('.anim_contact_h1').removeClass('animated slideInRight');
            	$('.anim_contact_h3').removeClass('animated slideInRight');
            	$('.anim_contact_div').removeClass('animated slideInRight');

                console.log("Going to section 3 !");
            }
        }

		});

		// AddClass/RemoveClass for Responsive

		// Up to 725px
		if (window.matchMedia("(min-width: 725px)").matches) {
			$('.content_skills,.contact_txt').addClass('vertical');
			$('.skills_div').removeClass('both');
		}
		// Up to 1025px
		else if (window.matchMedia("(min-width: 1025px)").matches) {
			$('.content_skills,.contact_txt').removeClass('vertical');
			$('.content_skills,.contact_txt').addClass('both');
		}
		// Minder to 725 px
		else {
			$('.content_skills,.contact_txt').removeClass('both');
			$('.content_skills,.contact_txt').removeClassClass('vertical');
			$('.skills_div').removeClass('both');
		}
	});

	
	
  
  // Variables Canvas

var container_canvas = $('.skills_div'),
    taille = container_canvas.width(),
	  val_pi = Math.PI,
	  start_circle = 1/2*val_pi,
	  complet_circle= 2*val_pi,
	  complet_littlecircle= 5/2*val_pi,
	  circle_val= complet_circle-start_circle,
	  littlecircle_val= complet_littlecircle-start_circle,
    dynamic = start_circle,
    my_val=0,
  	my_color="",
  	my_txt,
    circle="",
    circle_fond="",
    little_circle="",
    little_circle_fond="",
    rectangle_barre="",
    rectangle_fond="",
    rectangle_texte="",
    ctx_circle_fond="",
    ctx_circle="",
    ctx_littlecircle_fond="",
    ctx_littlecircle="",
    ctx_rectangle_barre="",
    ctx_rectangle_fond="",
    ctx_rectangle_texte="",
    center=0,
    radius=0,
    ratio_circle = 0,
    ratio_littlecircle = 0,
    ratio_rect = 0,
    val_radians=0,
    line_circle=0;


// Canvas Skills

  // Function
  
var canvas = {
	init : function() {
		
		canvas.canvas_add();
	},


	canvas_add : function(){
		if (window.matchMedia("(min-width: 1600px)").matches) {
		
		taille= taille-200;
		}else if(window.matchMedia("(min-width: 1024px)").matches){
			taille= taille-100;
		}

		container_canvas.each(function(){

					// Reduce the Heigth/Width of the canvas

					taille= taille-40,

					// Canvas init

					circle = $('<canvas id="circle" width="'+taille+'" height="'+taille+'" class="child both"/>'),
					circle_fond = $('<canvas id="circle" width="'+taille+'" height="'+taille+'" class="child both"/>'),
					little_circle = $('<canvas id="circle" width="110px" height="110px" class="child both"/>'),
					little_circle_fond = $('<canvas id="circle" width="110px" height="110px" class="child both"/>'),
					rectangle_barre = $('<canvas id="rectangle" width="75px" height="30px" class="child horizontal"/>'),
					rectangle_fond = $('<canvas id="rectangle" width="75px" height="30px" class="child horizontal"/>'),
					rectangle_texte = $('<canvas id="texte" width="75px" height="25px" class="child horizontal"/>'),
					ctx_circle = circle[0].getContext('2d'),
					ctx_circle_fond = circle[0].getContext('2d'),
					ctx_rectangle_barre = rectangle_barre[0].getContext('2d'),
					ctx_rectangle_fond = rectangle_fond[0].getContext('2d'),
					ctx_rectangle_texte = rectangle_texte[0].getContext('2d'),
					ctx_littlecircle = little_circle[0].getContext('2d'),
					ctx_littlecircle_fond = little_circle[0].getContext('2d'),
					center = taille/2,
					radius = center-75,
					dynamic = start_circle,
					
					// Take the .data for every option
					
					my_val = $(this).data('myval'),
					my_color = $(this).data('mycolor'),
					my_txt = $(this).data('mytxt'),
					ratio_circle = (my_val*circle_val)/100,
					ratio_littlecircle = (my_val*littlecircle_val)/100,
					ratio_rect = (75*my_val)/100;


					if (window.matchMedia("(min-width: 1025px)").matches) {
					  /* La largeur minimum de l'affichage est 1024 px inclus */
					  
					  $(this).append(circle);
					  $(this).append(circle_fond);
					  	
					canvas.circle();
					} else if (window.matchMedia("(min-width: 725px)").matches){
					  /* La largeur minimum de l'affichage est 724 px inclus */
					  
					  $(this).append(little_circle);
					  $(this).append(little_circle_fond);

					 
					canvas.little_circle();
					}else {
					  /* L'affichage est inférieur à 724px de large */
					  $(this).append(rectangle_fond);
					  $(this).append(rectangle_barre);
					  $(this).append(rectangle_texte);
					  
					 
					canvas.rectangle();
					}
		});
	},
	circle : function(){

							// Fond
					  		ctx_circle_fond.beginPath();
					  		ctx_circle_fond.arc(center,center,radius,complet_circle,start_circle,true);
					  		ctx_circle_fond.lineWidth = 12;
							ctx_circle_fond.strokeStyle = "#999";
							ctx_circle_fond.stroke();

							// Circle
							ctx_circle.beginPath();
							ctx_circle.arc(center,center,radius,start_circle+ratio_circle,start_circle,true);
							ctx_circle.lineWidth = 12;
							ctx_circle.strokeStyle = "#ea8853";
							ctx_circle.stroke();

							// texte 
							ctx_circle.font = "20px Arial";
							ctx_circle.fillStyle = "#555";	
							ctx_circle.fillText(my_txt,center+15,taille-68);

	},

	little_circle : function(){
							// Fond
					  		ctx_littlecircle_fond.beginPath();
							ctx_littlecircle_fond.arc(55,40,55-25,complet_littlecircle,start_circle, true);
							ctx_littlecircle_fond.lineWidth = 12;
							ctx_littlecircle_fond.strokeStyle = "#999";
							ctx_littlecircle_fond.stroke();
							
							// Little Circle
							ctx_littlecircle_fond.beginPath();
							ctx_littlecircle.arc(55,40,55-25,start_circle+ratio_littlecircle,start_circle, true);
							ctx_littlecircle.lineWidth = 12;
							ctx_littlecircle.strokeStyle = "#ea8853";
							ctx_littlecircle.stroke();
							

							// Texte //
							ctx_littlecircle.font= '12px Arial';
							ctx_circle.fillStyle = "#555";	
							ctx_littlecircle.fillText(my_txt,25,95);
	},

	rectangle : function(){
							// Texte //
							ctx_rectangle_texte.font= '12px Arial';
							ctx_circle.fillStyle = "#555";
							ctx_rectangle_texte.fillText(my_txt,0,20);

							// fond//
							ctx_rectangle_fond.beginPath();
							ctx_rectangle_fond.moveTo(0,15);
							ctx_rectangle_fond.lineTo(75,15);
							ctx_rectangle_fond.lineWidth= 30;
							ctx_rectangle_fond.strokeStyle = "#999"; // Définition de la couleur de remplissage
							ctx_rectangle_fond.stroke();

							// rectangle //
							ctx_rectangle_barre.beginPath();
							ctx_rectangle_barre.moveTo(0,15);
							ctx_rectangle_barre.lineTo(ratio_rect,15);
							ctx_rectangle_barre.lineWidth= 30;
							ctx_rectangle_barre.strokeStyle = "#ea8853"; // Définition de la couleur de remplissage
							ctx_rectangle_barre.stroke();
					
	}
};

})(jQuery);