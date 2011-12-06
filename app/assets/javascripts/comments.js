
$(document).ready(function(){
	//SHOW ADD RESPONSES ADD SECTION	
			$(".add_response_link").click(
				function(){
					var $article_body=$(this).parent().parent().parent().find("section.article_body");
					var $article_avatar=$(this).parent().parent().parent().find("section.avatar_wrapper");
					$(this).next('div').removeClass('hidden');
					$article_avatar.height( $article_body.height());	
				}
			)
			$(".close,a.cancel_link").click(
				function(){
				
					// variables to determine the avatar section and the article body section height
					var $article_body=$(this).parent().parent().parent().parent().find("section.article_body");
					var $article_avatar=$(this).parent().parent().parent().parent().find("section.avatar_wrapper");
									
						if($(this).hasClass('initial_response')){//if this is the first response and the response section is empty close all the article response section
							$(this).parent().parent().parent().find('div.article_responses').addClass('hidden');
						    $article_avatar.height( $article_body.height());	// match avatar left section height to article body right section height
						}
						else{ // if this is the not the first response  close only the add response section
							$(this).parents().find('div.add_response').addClass('hidden');
						}
					$article_avatar.height( $article_body.height());	// match avatar left section height to article body right section height
				}
			)
			//SHOW-HIDE HOME ARTICLE PARAGRAPH	
			$(".responses").click(
				function(){	
					
				if ($(this).parent().parent().find(".article_responses").hasClass('hidden')){				    					
					var $article_body=$(this).parent().parent().parent().find("section.article_body");
					var $article_avatar=$(this).parent().parent().parent().find("section.avatar_wrapper");
					$(this).parent().parent().find(".article_responses").removeClass("hidden") //display responses 
					$article_avatar.height( $article_body.height());	
				}	
				else{
				var $article_body=$(this).parent().parent().parent().find("section.article_body");
				var $article_avatar=$(this).parent().parent().parent().find("section.avatar_wrapper");
				$(this).parent().parent().find(".article_responses").addClass("hidden") //hide responses
				$article_avatar.height( $article_body.height()); 
				}
			});

});