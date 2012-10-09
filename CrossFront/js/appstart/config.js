/* 
    Put Global Config Variables here
    *Note - Only plain JS should go here because jQuery is not loaded yet
*/

//global variables
if (!App) var App = {};

if (document.domain == "crossplatform.apphb.com") {
    App.rootUrl = "";
}
else {
    App.rootUrl = "/www";
}

//console hack for IE
if (typeof console == "undefined") {
    this.console = { log: function () { } };
}

//is this a mobile phone???
App.userAgent = navigator.userAgent + '';
if (App.userAgent.indexOf('iPhone') > -1) {
    document.write('<script src="js/libs/cordova-iphone.js"></sc' + 'ript>');
    App.mobile_system = 'iphone';
}
else if (App.userAgent.indexOf('Android') > -1) {
    document.write('<script src="js/libs/cordova-android.js"></sc' + 'ript>');
    App.mobile_system = 'android';
}
else {
    document.write('<script src="js/libs/cordova-2.0.0.js"></sc' + 'ript>');
    App.mobile_system = '';
}
