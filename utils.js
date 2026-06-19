function addImageDescription(image) {
	var div = document.createElement('div');
	div.setAttribute('class', 'img_label')
	div.innerText = image.getAttribute('alt')
	image.after(div)
}


function makeImageClickable(image) {
	var link = document.createElement('a');
	link.setAttribute('href', image.getAttribute('src'));

	image.parentNode.replaceChild(link, image);
	link.appendChild(image);
}


window.onload = function() {
	var images = document.getElementsByTagName('img')
	for (let i = 0; i < images.length; i++) {

		if (images[i].getAttribute('alt'))
			addImageDescription(images[i]);

		if (images[i].getAttribute('data-click_me'))
			makeImageClickable(images[i]);
	}
}