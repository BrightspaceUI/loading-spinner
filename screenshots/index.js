var page = require('webpage').create();

page.viewportSize = { width: 200, height: 200 };

// wait for polymer serve
setTimeout( function() {
	page.open('http://localhost:8080/components/d2l-loading-spinner/screenshots/', function(status) {
		if (status === 'fail') {
			console.log('failed');
			phantom.exit();
		}
		// wait for component to load
		setTimeout( function() {
			var clipRect = page.evaluate( function() {
				var screenshot = document.querySelector( '.spinner' );
				return screenshot.getBoundingClientRect();
			});
			page.clipRect = clipRect;
			page.render('screenshots/screenshot.png');
			console.log('success');
			phantom.exit();
		}, 800);
	});
}, 500);
