$('nav a').on('click', function(e){
	e.preventDefault();
	var url = this.href;
}

$('nav a.current').removeClass('current');
$(this).addClas('current');

$('#container').remove()
$('#content').load(url + ' #container').hide().fadeIn('slow')
});