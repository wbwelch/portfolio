//JavaScipt Document

//on document ready
$( document ).ready(function() {
    
    //global variables

    //portfolio clickable divs
    var div1 = $("#code-examples");
    var div2 = $("#art-examples");
    var div3 = $("#writing-examples");
    var portOptions=$("#port-options");
    var back = $("#back-button");

    //default views
    div1.hide();
    div2.hide();
    div3.hide();

    //on code-block click
    $("#code-block").on("click", function() {
        div2.hide();
        div3.hide();
        div1.show();
        portOptions.hide();
    });

    //on art-block click
    $("#art-block").on("click", function() {
        div1.hide();
        div3.hide();
        div2.show();
        portOptions.hide();
    });

    //on writing-block click
    $("#writing-block").on("click", function() {
        div1.hide();
        div2.hide();
        div3.show();
        portOptions.hide();
    });
    
    //on writing-block click
    $(".back-button").on("click", function() {
        div1.hide();
        div2.hide();
        div3.hide();
        portOptions.show();
    });
    
//onready end
});