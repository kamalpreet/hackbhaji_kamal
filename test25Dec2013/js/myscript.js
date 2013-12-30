

$( document ).ready(function() {
$(".show-menu" ).click(function() {
	$('div.menu').show();
	$('.close-menu').show();
	$(this).hide();
});
$(".close-menu" ).click(function() {
	$('div.menu').hide();
	$('.show-menu').show();
	$(this).hide();
});
});