//JavaScipt Document

//global variables

//portfolio clickable divs
var div1 = $("#code-examples");
var div2 = $("#art-examples");
var div3 = $("#writing-examples");

//default views
div1.show();
div2.hide();
div3.hide();

//on code-block click
$("#code-block").on("click", function() {
    div2.hide();
    div3.hide();
    div1.show();
});

//on art-block click
$("#art-block").on("click", function() {
    div1.hide();
    div3.hide();
    div2.show();
});

//on writing-block click
$("#writing-block").on("click", function() {
    div1.hide();
    div2.hide();
    div3.show();
});