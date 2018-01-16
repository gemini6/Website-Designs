// scripts.js

$(document).ready(function() {
	$('#fullpage').fullpage({
		// Navigation
		menu: '#navbar', 
		lockAnchors: false, 
		anchors: ['firstPage', 'secondPage'],
		navigation: true, 
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Coffee :P', 'Connect with us!'],
		showActiveTooltip: false, 
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		// Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectioDelay: 1000, 
		scrollBar: false,
		easing: 'easeInOutCubic', 
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSection: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '.scroll-normally',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
		// Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,
		// Design
		controlArrows: false,
		verticalCentered: true,
		sectionsColor: ['#3e3e3e', '#3e3e3e', '#3e3e3e'],
		paddingTop: '3em', 
		paddingBottom: '10px',
		fixedElements: '#navbar',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {
			type: 'reveal',
			percentage: 62,
			property: 'translate'
		},
		// Custom selectors
		sectionSelector: '.section',
		slidesSelector: '.slide',
		lazyLoading: true,
		// Events
		onLeave: function(index, nextIndex, direction) {

		},

		afterLoad: function(anchorLink, index) {

		}, 

		afterRender: function() {

		},

		afterResize: function() {

		},

		afterResponsive: function(isResponsive) {

		},

		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

		}, 

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

		}
	}); // $('#fullpage').fullpage({});

}); // $(document).ready(function(){});
