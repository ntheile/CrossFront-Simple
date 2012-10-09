/* 
    Globals - jQuery, $, Backbone, _ 
    
    Note - This module is automatically loaded when all the libraries
    and scripts are loaded from the appstart folder
*/
/// <reference path="libs/jquery.d.ts"/>
/// <reference path="libs/backbone.d.ts"/>

//import your classes
import Model = module("models/Todo");

//declare a variable representing underscore so this typescript file will compile without errors
declare var _: any;
declare var require: any;
declare var App: any;
declare var $: any;

//initilize the backbone module
var task = new Model.Todo();

//Get the default value for content
console.log(task.get("content"));

//Now set it to a new value
task.set({ "content": "First task to do" });

//Get the new value we just set
console.log(task.get("content"));

//This simply shows that jQuery works. 
//In Visual Studio you get intellisense since we referenced jquery.d.ts!!
$(document).ready(function () {
    console.log("dom loaded");
});




