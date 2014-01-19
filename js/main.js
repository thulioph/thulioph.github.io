head.js("js/vendor/jquery.min.js","js/vendor/jquery.tooltipster.js", function(){
		jQuery(function(){
			// Tooltip
				$("a.icones").addClass("tooltip");
				$(".link-onde-estou").addClass("tooltip");
				$(".tooltip").tooltipster();
		});
});
