/*
    Put only required initilization code here and start the app and load libraries.
    This file should be able to be re-used as a boilerplate for most apps.
*/


//todo
//1. media queries for desktop and mobile views

require.config({
    urlArgs: "bust=v6",
    paths: {
        backbone: 'libs/backbone-0.5.3',
        text: 'libs/text',
        underscore: 'libs/underscore-1.3.0',
        jquery: 'http://code.jquery.com/jquery-1.8.2.min',
        jqm: 'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min',
        jqmr: 'libs/jquery.mobile.router',
        app: 'app',
        cordova: 'libs/cordova-2.0.0',
        modernizr: 'libs/modernizr'
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['jquery', 'underscore' ],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'app': {
            deps: ['jquery', 'backbone', 'jqm', 'jqmr'],
            exports: 'AppLoaded'
        },
        'jqm': {
            deps: ['jquery', 'jqmr'],
            exports: '$$'
        }
    }
});

//load core libs
require(['jquery', 'underscore', 'backbone', 'modernizr'],
    function ($, _, Backbone, modernizr) {

        // Exposing globals just in case that we are switching to AMD version of the lib later
        var global = this;
        global._ = global._ || _;
        global.Backbone = global.Backbone || Backbone;
        console.log('core libs loaded');

        //config jqm b4 it loads
        //look into using the cordova boilerplate template from jquerymobile.com... slides dont look good on android
        $(document).bind("mobileinit", function () {

            if (navigator.userAgent.indexOf("Android") != -1) {
                $.mobile.defaultPageTransition = 'fade';
            }
            else {
               $.mobile.defaultPageTransition = 'none';
            }

        });
        
        //Now that those are loaded, load these scripts
        require(['jqmr', 'jqm', 'text'],
            function (jqmr, $$, text) {
                console.log("start your engines");
                
                // in order to prevent viewing unstyled content before all out libraries are loaded
                $('#loaded').show();
                $('#preLoad').hide();

                //start your router
                require(['appstart/router']);
                console.log('router started');

                //now that all your prerequisites are loaded...start your app
                require(['app']);
                console.log('app started');

        });

    });
