(function($) {

	// Canvas Jauge for skills 

	var canvas = function() {

			// Variables Container Canvas

			var container_canvas = $('.skills_div'),
          		taille = container_canvas.width(),
          		taille_txt = taille,
				val_pi = Math.PI,
				start_circle = 1/2*val_pi;
		
    			
				// Put Canvas in container

				container_canvas.each(function(){

					// Reduce the Heigth/Width of the canvas

					taille= taille-40;

					// Canvas init

					var circle = $('<canvas id="circle" width="'+taille+'" height="'+taille+'" class="child both"/>'),
						ctx_circle = circle[0].getContext('2d'),
						center = taille/2,
						radius = center-20;
					
					// Take the .data for every option
					
					var my_val = $(this).data('myval'),
						my_color = $(this).data('mycolor'),
						ratio = (360/100)*my_val,
						val_radians = ratio * Math.PI / 180,
						dynamic = start_circle;
					
					/*

					Test

					console.log('Val: '+my_val);
					console.log('Ratio: '+ratio);
					console.log('Radian: '+val_radians);
					console.log('Color: '+my_color);

					*/

					// Add the canvas

					$(this).append(circle);

					// Create the loop for loading 

					function loop_canvas() {

						// Set the value dynamic

						dynamic=dynamic+0.01;

						if(dynamic <= val_radians){
							
							// Circle

							ctx_circle.clearRect(0,0,taille,taille);
							ctx_circle.beginPath();
							ctx_circle.arc(center,center,radius,start_circle,dynamic, false);
							ctx_circle.lineWidth = 15;
							ctx_circle.lineCap = 'round';
							ctx_circle.strokeStyle = ""+my_color+"";
							ctx_circle.stroke();
							
						}else{
							
							clearInterval(interv);
						}
					
					// Text

					

					}

					
					var interv = setInterval(loop_canvas,1);
						
						
				});
	};

	var button_experience = function() {

		var cont_article = $('.container_article'),
			article_exp = $('.experience_article'),
			taille_article = article_exp.width(),
      		val_left = 0,
      		nbr_article = 4-1;
			
			/*

			console.log("Article: "+taille_article);
    		
    		*/
	    	
	    	function moveLeftPos() {
	    		
          		cont_article.animate({
          			left : val_left
          		});
	    		
	    	}

	    	$('button.right').click(function(){
	    		if(-val_left < taille_article*nbr_article){
	    			val_left -= taille_article;
	    			moveLeftPos();
	    			console.log('val_left: '+val_left);
	    		}else{
	    			val_left = 0;
	    			moveLeftPos();
	    		}
			});

			$('button.left').click(function(){
				if(-val_left > 0){
		    		val_left += taille_article;
		    		moveLeftPos();
		    		console.log('val_left: '+val_left);
		    	}
			});
	    	
	};

	button_experience();
	canvas();

	// Google map

	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 50.455043 , lng: 3.955804},
	    zoom: 10
	  });
	}

	initMap();
	
})(jQuery);