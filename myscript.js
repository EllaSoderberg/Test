

//http://stackoverflow.com/questions/16334054/inject-html-into-a-page-from-a-content-script


var xmlHttp = null;

xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", chrome.extension.getURL ("kontakt.html"), false );
xmlHttp.send( null );

var inject  = document.createElement('div');

inject.innerHTML = xmlHttp.responseText

//body-1_5-container
var className = document.getElementsByClassName("body-1_5-container");

className[0].insertBefore (inject, className[0].firstChild);

var a = document.createElement('script');
a.src = chrome.extension.getURL('JSXTransformer.js');
a.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(a);


var b = document.createElement('script');
b.src = chrome.extension.getURL('react.js');
b.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(b);


//http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script
var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('kontakt.js');

s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);




0
