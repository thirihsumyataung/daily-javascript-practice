$(document).ready(function(){
    $('#btn1').click(function(){
        $("p").append("<b> Appended Text. </b>"); 
    }); 

    $("#btn2").click(function(){
        $('p').append('<b>Appended Item.</b>'); 
    }); 
}); 