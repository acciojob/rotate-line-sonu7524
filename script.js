//your JS code here. If required.
var angle = 0;
		setInterval(function() {
			angle += 1;
			document.querySelector('#line').style.transform = 'rotate(' + angle + 'deg)';
		}, 10);