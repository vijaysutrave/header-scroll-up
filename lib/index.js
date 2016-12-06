'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var options = {
	defaultCss: true,
	animationDelay: 0.2,
	topOffset: 0
};

var commonStyles = {
	'transition': 'all 0.2s ease-in-out',
	'position': 'fixed',
	'top': 0,
	'left': 0,
	'width': '100%'
};

var unStyleObject = {
	top: '0px'
};

var setScrollableHeader = function setScrollableHeader(header, userOptions) {

	if (typeof header === 'string') {
		header = document.querySelectorAll(header)[0];
	}

	if (userOptions.animationDelay && typeof userOptions.animationDelay === 'number') {
		commonStyles['transition'] = 'all ' + userOptions.animationDelay + 's ease-in-out';
	}

	Object.assign(options, userOptions);

	if (!header) {
		throw new Error('Header element not found');
	}

	if ((typeof header === 'undefined' ? 'undefined' : _typeof(header)) === 'object' && !header.nodeName) {
		throw new Error('Header element not found');
	}

	if (options.defaultCss === false && !options.classname) {
		throw new Error('Class Name to add not provided');
	}

	if (options.defaultCss) {
		Object.assign(header.style, commonStyles);
	}

	var headerHeight = header.clientHeight;

	var styleObject = {
		top: -headerHeight + 'px'
	};

	var prevScrollTop = 0;

	var callbackMapper = {
		'true': function _true(direction) {
			if (direction === 'down') {
				Object.assign(header.style, styleObject);
			} else {
				Object.assign(header.style, unStyleObject);
			}
		},
		'false': function _false(direction) {
			if (direction === 'down') {
				header.classList.add(options.classname);
			} else {
				header.classList.remove(options.classname);
			}
		}
	};

	var pageScrolled = function pageScrolled(e) {
		if (pageYOffset < options.topOffset) {
			return;
		}

		if (window.pageYOffset > prevScrollTop) {
			callbackMapper[options.defaultCss]('down');
		} else {
			callbackMapper[options.defaultCss]('up');
		}
		prevScrollTop = pageYOffset;
	};

	document.addEventListener('scroll', pageScrolled, false);
};

module.exports = {
	setScrollableHeader: setScrollableHeader
};