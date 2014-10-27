// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

$(function() {
    App.init();
});

var App = {

    settings: {
        name: "My Application",
        version: "1.0.0",
        ga: {
            urchin: "UA-XXXXXX-XX",
            url: "yourdomain.com"
        }
    },

    listen: function() {
        // Application Listeners can be loaded here for easy configuration		
        console.log("Ready and Listening");
    },

    init: function() {
        // Kick off the listeners
        this.listen();
        // Application has been initalized
        console.log(this.settings.name + "(v" + this.settings.version + ") Started");


        // function divClicked() {
        //     var divHtml = $(this).html();
        //     var editableText = $("<textarea />");
        //     editableText.val(divHtml);
        //     $(this).replaceWith(editableText);
        //     editableText.focus();
        //     // setup the blur event for this new textarea
        //     editableText.blur(editableTextBlurred);
        //     console.log(divHtml);
        // }

        // function editableTextBlurred() {
        //     var html = $(this).val();
        //     var viewableText = $("<p>");
        //     viewableText.html(html);
        //     $(this).replaceWith(viewableText);
        //     // setup the click event for this new div
        //     viewableText.click(divClicked);
        // }

        // $(document).ready(function() {
        //     $("p").click(divClicked);
        // });

        // alert("working");


    }

};