/* Globals - jQuery, $, Backbone, _ */

/// <reference path="../libs/jquery.d.ts"/>
/// <reference path="../libs/backbone.d.ts"/>

declare var $: any;
declare var _: any;

export class Todo extends Backbone.Model  {
    
    defaults(): TodoInterface {
        return {
            content: 'Default Thing to do'
        };
    };

    initialize() {
        console.log("Todo Model init'ed.");
    };

    validate(attrs : TodoInterface) {
       
       if (_.isEmpty(attrs.content)) {
            return "Content is required.";
       }
       
       return "";
    }

};

//put all the default values here, it will make intellisense work nicely
interface TodoInterface {
    content: string;     
};
