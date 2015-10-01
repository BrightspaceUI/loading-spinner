'user strict';

jest.dontMock( '../src/LoadingSpinner.jsx' );

describe( 'LoadingSpinner', function() {

	var React;
	var LoadingSpinner;
	var TestUtils;

	beforeEach( function() {
		React = require( 'react/addons' );
		LoadingSpinner = require( '../src/LoadingSpinner.jsx' );
		TestUtils = React.addons.TestUtils;
	});

	it( 'load spinner with size 10px, thickness 10px and #ccc, expect correct size', function() {

		var expectedSize = '10px';
		var expectedThickness = '10px'
		var expectedColour = '#ccc';

		var spinner = TestUtils.renderIntoDocument(
			<LoadingSpinner size={expectedSize} thickness={expectedThickness} colour={expectedColour}/>
		);

		expect( spinner.sizeValue + spinner.sizeUnits ).toEqual( expectedSize )
		expect( spinner.thicknessValue + spinner.thicknessUnits ).toEqual( expectedThickness );
	});

	it( 'load spinner with invalid units, expect exception', function() {

		var expectedSize = '10%';
		var expectedThickness = '10px'
		var expectedColour = '#ccc';

		try {

			TestUtils.renderIntoDocument( 
				<LoadingSpinner size={expectedSize} thickness={expectedThickness} colour={expectedColour}/>
			);
			throw 'expected exception';
		} catch( err ) {
			expect( err );
		}
	});
})

