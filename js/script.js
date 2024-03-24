  $(document).ready(function() {
    $(".menu-bar").click(function(){
    $(".nav .navigation-menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});

$(".navigation-menu .fa-times").click(function(){
    $(".nav div.navigation-menu, .overlay").toggle(500);
	$('body').css('overflow-y', 'visible');
});

$(".nav .drop1 .angel").click(function(){
    $(".nav ul li.drop1 ul").slideToggle(500);
	$(".nav ul li.drop1 .angel").toggleClass('rotate');
});
$(".nav .drop2 .angel").click(function(){
    $(".nav ul li.drop2 ul").slideToggle(500);
	$(".nav ul li.drop2 .angel").toggleClass('rotate');
});
$(".nav .drop3 .angel").click(function(){
    $(".nav ul li.drop3 ul").slideToggle(500);
	$(".nav ul li.drop3 .angel").toggleClass('rotate');
});
$(".lang").click(function(){
    $(".lang ul").slideToggle(500);
});

$(".profile").click(function(){
    $(".profile ul").slideToggle(500);
});

 $(".tabber li.family").click(function() {
       $(".tabber li.family ul").slideToggle(100);
    });
 $(".tabber li.health-nutrition").click(function() {
       $(".tabber li.health-nutrition ul").slideToggle(100);
    });
 
 $(".edit").click(function() {
        $(this).parent().nextAll('.editlist').first().slideToggle('100');
    });



    });
