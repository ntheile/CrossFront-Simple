App.Router = new $.mobile.Router(
    {
        "#index": {
            handler: function () { console.log("Index Page fired, fire off backbone view"); },
            events: "bs"
        },
        "#one": {
            handler: function () { console.log("Page one fired, get backbone view"); },
            events: "bs"
        },
        "#two": {
            handler: function () { console.log("Page two fired, get backbone view"); },
            events: "bs"
        },
        ".": { //this code runs when any new page is initialized into jquery mobile
            handler: function () { console.log("Router Init'ed"); },
            events: "i"
        }
    }
);



