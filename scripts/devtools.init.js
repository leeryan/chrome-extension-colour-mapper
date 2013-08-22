//Uses the devtools.panels API to extend the dev tools GUI
//Instance is created for each developer tools opened.

//API modules are only available to the pages loaded within the developer tools window. 
//Other extension API's are not available to the developer tools page but they can be onvoked by sending a request to the background page of the extension
//http://developer.chrome.com/extensions/overview.html#contentScripts
/*
(function(){
	
	var CM = window.CM || {};
	
	
	CM.panel = {
		create: function(){	
			chrome.devtools.panels.create("Colour mapper", "../img/panel_icon.png", "../html/panel.html", function(panel){
						
			});
		}
	}

	CM.panel.create();
		
})();
*/

chrome.devtools.panels.create("Test", "/icon.png", "../html/panel.html", function(extensionPanel) {
    var _window; // Going to hold the reference to panel.html's `window`

    var data = [];
    var port = chrome.extension.connect({name:"devtools"});
    port.onMessage.addListener(function(msg) {
        // Write information to the panel, if exists.
        // If we don't have a panel reference (yet), queue the data.
        if (_window) {
            _window.do_something(msg);
        } else {
            data.push(msg);
        }
    });

    extensionPanel.onShown.addListener(function tmp(panelWindow) {
        extensionPanel.onShown.removeListener(tmp); // Run once only
        _window = panelWindow;

        // Release queued data
        var msg;
        while (msg = data.shift()) 
            _window.do_something(msg);
        // Just to show that it's easy to talk to pass a message back:
        _window.respond = function(msg) {
            port.postMessage(msg);
        };
    });
});