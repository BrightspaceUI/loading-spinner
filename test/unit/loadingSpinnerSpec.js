( function() {
	'use strict';

	describe( 'vui-loading-spinner', function() {

		beforeEach( function () {
			jasmine.addMatchers( vui.jasmine.dom.matchers );
		});

		describe( 'selectors', function() {

			it( 'defines a ".vui-loading-spinner" selector', function() {
				expect( document ).toHaveCssSelector( '.vui-loading-spinner' );
			});

		});

		describe( 'loading spinner container', function() {

			var node;

			beforeEach( function () {
				node = document.body.appendChild( document.createElement( 'div' ) );
				node.className = 'vui-loading-spinner';
			});

			afterEach( function() {
				document.body.removeChild( node );
			});

			it( 'has 50% border radius', function() {
				expect( node ).toHaveBorderRadius( '50%' );
			});

			it( 'has overflow hidden', function() {
				expect( node ).toHaveOverflow( 'hidden' );
			});

			it( 'has display inline-block', function() {
				expect( node ).toHaveDisplay( 'inline-block' );
			});

			it( 'has border colour #cccccc', function() {
				expect( node ).toHaveBorderColor( 'rgb(204, 204, 204)' );
			});

			it( 'has width 70px', function() {
				expect( node ).toHaveWidth( '70px' );
			});

			it( 'has height 70px', function() {
				expect( node ).toHaveHeight( '70px' );
			});

			it( 'has before element display block', function() {
				expect( node ).toHaveBeforeElementDisplay( 'block' );
			});
		} );
	} );

} )();