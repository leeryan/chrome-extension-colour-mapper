(function(){
	
	var CM = window.CM || {};
	
	
	CM.panel = {
		create: function(){	
			chrome.devtools.panels.create("Colour mapper", "../img/panel_icon.png", "../html/panel.html", function(panel){});
		}
	}

	CM.panel.create();
		
})();