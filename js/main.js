$(document).ready(function(){

$("#btn1").click(function(){
    
    $("#paragraph").css('font-weight' ,"bolder")
 })
});

 $("#btn2").click(function(){
  
    $("#paragraph").css('font-weight' ,"normal");
    
    $("#paragraph").css('fontStyle' ,"normal");
    $("#paragraph").css('textDecoration','none');
 });
 $("#btn3").click(function(){
    $("#paragraph").css('fontStyle',"italic");
});

$("#btn4").click(function(){
    $("#paragraph").css('textDecoration','underline'); 
});


   
$('#pl').change(function(){
    var police = $('#pl').val();
    console.log($('#pl').val())
    $('#paragraph').css('fontFamily',police);
});

    $("#sz").change(function(){
    var size=$('#sz').val();
    console.log($('#sz').val());
    $("#paragraph").css('fontSize', size+"px");
    });
