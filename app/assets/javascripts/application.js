// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require_tree .

// Always send the authenticity_token with ajax
$(document).ready(function(){
	//  TOOLTIP
	   var changeTooltipPosition = function(event) {
		var tooltipX = event.pageX - 78;
		var tooltipY = event.pageY + 8;
		$('div.tooltip').css({top: tooltipY, left: tooltipX});
	};

	var showTooltip = function(event) {
	
		$('div.tooltip').remove();
		$('<div class="tooltip"></div>').appendTo('body');
		$('div.tooltip').html($(this).parent().parent().find('div.tip_display').html())
		changeTooltipPosition(event);
	};
	
//$('div.tooltip').html($('div.tip_display').html())
	var hideTooltip = function() {
		$('div.tooltip').remove();
	};

	$("a.hint").bind({
		mousemove : changeTooltipPosition,
		mouseenter : showTooltip,
		mouseleave: hideTooltip
	});	
	
	//Search bar gain focus behaviour
			$("#search_field").focus(function(){
			  	$("#search_field").val("");//remove search initial text from text input
			  	$("#search_field").css("color", "#535353")//change the text color to black instead gray
			  	$("#search_field").css("border","1px solid #54C491")
			})
			$("div#search input.text").blur(function(){
			  	$("div#search input.text").css("border","1px solid #ABADB3")
			})
					
// show selected tab
 $('.corp_nav').parent().find('nav ul li#corporation_nav').css("background-color","#329A6C").css("-webkit-border-radius","6px").css("-moz-border-radius","6px").css("border-radius","6px");
 $('.deal_nav').parent().find('nav ul li#deals_nav').css("background-color","#329A6C").css("-webkit-border-radius","6px").css("-moz-border-radius","6px").css("border-radius","6px");
 $('.write_nav').parent().find('nav ul li#write_nav').css("background-color","#329A6C").css("-webkit-border-radius","6px").css("-moz-border-radius","6px").css("border-radius","6px");
 $('.works_nav').parent().find('nav ul li#works_nav').css("background-color","#329A6C").css("-webkit-border-radius","6px").css("-moz-border-radius","6px").css("border-radius","6px");

});