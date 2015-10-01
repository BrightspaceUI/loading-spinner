'use strict';

var React = require('react'),
	LoadingSpinner = require('../src/LoadingSpinner.jsx');

var Main = React.createClass({

	render: function() {
		return <div>
					<LoadingSpinner size='10px' />
					<LoadingSpinner size='50px' />
					<LoadingSpinner size='100px' />
					<LoadingSpinner size='150px' />
					<LoadingSpinner size='200px' />
				</div>
	}
});

React.render(
	<Main />,
	document.getElementById('placeholder')
);