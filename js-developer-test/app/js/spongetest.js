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

			/**
			 * Populate the header
			 */
			var populateHeader = function() {
				var strHeaderSource = $( '#header-template' ).html(),
						resHeaderTemplate = Handlebars.compile( strHeaderSource ),
						strHeaderHTML = resHeaderTemplate( resContent.getItem( 'header' ) );

				$( '#header' ).html( strHeaderHTML );
			};

			/**
			 * Populate the tasks
			 */
			var populateTasks = function() {
				var strTaskSource = $( '#task-template' ).html(),
						resTasksTemplate = Handlebars.compile( strTaskSource ),
						strTasksHTML = resTasksTemplate( resContent.getItem( 'tasks' ) );

				$( '#tasks' ).append( strTasksHTML );
			};

			/**
			 * Populate the about section
			 */
			var populateAbout = function() {
				var strAboutSource = $( '#about-template' ).html(),
						resAboutTemplate = Handlebars.compile( strAboutSource ),
						strAboutHTML = resAboutTemplate( resContent.getItem( 'about' ) );

				$( '#about' ).append( strAboutHTML );
			};

			/**
			 * Populate the content
			 */
			var populateContent = function() {
				var strContentSource = $( '#content-template' ).html(),
						resContentTemplate = Handlebars.compile( strContentSource ),
						strContentHTML = resContentTemplate( resContent.getItem( 'content' ) );

				$( '#content' ).append( strContentHTML );
			};

			/**
			 * Populate the documentation links
			 */
			var populateDocumentation = function() {
				var strContentSource = $( '#documentation-template' ).html(),
						resContentTemplate = Handlebars.compile( strContentSource ),
						strContentHTML = resContentTemplate( resContent.getItem( 'docs' ) );

				$( '#documentation' ).append( strContentHTML );
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
						populateHeader();
						populateTasks();
						populateAbout();
						populateContent();
						populateDocumentation();

						/* "About Me" accordion */
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
