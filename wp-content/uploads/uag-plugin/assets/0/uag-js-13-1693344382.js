document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-7ed3e48b' );
					if ( ! blockScope ) {
						return;
					}
					const mediaGallery = {"653":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/carolinematoss_20230505_p_3096309573728025564_3_3096309567503506078.jpg","656":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/figueiredoturismo_20220728_p_2892515453046252617_1_2892515449011300061.jpg","657":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/figueiredoturismo_20220728_p_2892515453046252617_3_2892515449019753770.jpg","662":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/figueiredoturismo_20230426_p_3089535824936370609_8_3089535819819473842.jpg","668":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/zellinebraz_20230530_p_3114119497099421703_3_3114119491361506802.jpg","416":"http:\/\/localhost\/figueiredo_turismo\/wp-content\/uploads\/2023\/08\/figueiredoturismo_20230426_p_3089535824936370609_7_3089535819718712337.jpg"};
					const images = blockScope.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
					for ( let i = 0; i < images.length; i++ ) {
						const imageID = parseInt( images[ i ].getAttribute( 'data-spectra-gallery-image-id' ) );
						const imageURL = mediaGallery[ imageID ];
						images[ i ].style.cursor = 'pointer';
						images[ i ].addEventListener( 'click', () => window.open( imageURL, '_blank' ) );
					}
				} );
			 });