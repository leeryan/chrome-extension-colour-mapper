var DOM=window.DOM||{};chrome.runtime.onMessage.addListener(function(e,t){alert("content script got a message");alert("in content script message recieved is "+JSON.stringify(e));chrome.runtime.sendMessage("My url is"+window.location.origin)});DOM.scrapedom=function(e){var e={rule01:"color"},t={},n=function(){var t=document.getElementsByTagName("*");for(var n=0;n<t.length;n++){var r=t[n],s=window.getComputedStyle(r);for(var o in s)if(o===e.rule01){var u=e.rule01,a=s[o];i(a,u)}}},r=function(){for(rule in e){var r=e[rule];t[r]={}}n()},i=function(e,t){};return{init:function(){r()}}}();$("document").ready(function(){DOM.scrapedom.init()});