$(".show-menu" ).click(function() {
	alert('hello');
	$(this).parents('.menu').show();
});
$(".hide-menu" ).click(function() {
	$(this).parents('.menu').hide();
});
