/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/

jQuery(
		function( $ ) {
			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new Content( 'app/data/content.json' );

			/* generic function to populate an element `targetId`, given:
			 * - Content object `content`
			 * - a value `contentItem` within that object
			 * - a Handlebars template with id `templateId`
			 * 
			 * Todo:
			 * - check content is valid
			 * - check contentItem exists in content
			 * - check templateId is valid
			 * - check targetId is valid
			 */
			var populate = function(content, contentItem, templateId, targetId) {
				try {
					var templateSource = $(templateId).html(),
						template = Handlebars.compile(templateSource),
						html = template(content.getItem(contentItem));
					$(targetId).html(html);
				} catch(err) {
					console.error('Error: ' + err);
				}
			};

			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);

			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {
						// populate(resContent, 'header', 	'#header-template', 		'#asdf');			// header
						populate(resContent, 'header', 	'#header-template', 		'#header');			// header
						populate(resContent, 'tasks', 	'#task-template', 			'#tasks');			// tasks
						populate(resContent, 'about', 	'#about-template', 			'#about');			// about
						populate(resContent, 'content', '#content-template', 		'#content');		// content
						populate(resContent, 'docs', 	'#documentation-template', 	'#documentation');	// docs

						var acc = document.getElementsByClassName("accordionButton");
						var i;
						for (i = 0; i < acc.length; i++) {
							acc[i].addEventListener("click", function() {
								this.classList.toggle("active");		
								var panel = this.nextElementSibling;
								if (panel.style.display === "block") {
									panel.style.display = "none";
								} else {
									panel.style.display = "block";
								}
							});
						}
					}
			);
		}	
);
