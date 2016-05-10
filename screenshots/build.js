var page = require('webpage').create();
page.viewportSize = {width: 1000, height: 1000};
page.open('./test/perceptual/loading-spinner.html', function() {

	var clipRect = page.evaluate( function () {
		var screenshot = document.querySelector( '.screenshot' );
		return screenshot.getBoundingClientRect();
	});

	// Was not rendering in screenshot without timeout
	setTimeout( function() {
		page.clipRect = {
			top:    clipRect.top,
			left:   clipRect.left,
			width:  clipRect.width,
			height: clipRect.height
		};
		page.render('screenshot.png');
		phantom.exit();
	}, 500 );
});