/* Default options */
const options = {
    defaultCss: true,
    animationDelay: 0.2,
    topOffset: 0
};

/* Will add default styles to the header */
const commonStyles = {
    'transition': 'all 0.2s ease-in-out',
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'width': '100%'
};

/* Reset header position */
const unStyleObject = {
    top: '0px'
}

let setScrollableHeader = (header, userOptions) => {

    if (typeof header === 'string') {
        header = document.querySelectorAll(header)[0];
    }

    if (!header) {
        throw new Error('Header element not found');
    }

    if (typeof header === 'object' && !header.nodeName) {
        throw new Error('Header element not found');
    }

    if (options.defaultCss === false && !options.classname) {
        throw new Error('Class Name to add not provided');
    }

    if (userOptions.animationDelay && typeof userOptions.animationDelay === 'number') {
        commonStyles['transition'] = 'all ' + userOptions.animationDelay + 's ease-in-out'
    }

    /* Extend the options */
    Object.assign(options, userOptions);

    if (options.defaultCss) {
        Object.assign(header.style, commonStyles);
    }

    const headerHeight = header.clientHeight;

    let styleObject = {
        top: -(headerHeight) + 'px'
    }

    let prevScrollTop = 0;

    const callbackMapper = {
        'true': function(direction) {
            if (direction === 'down') {
                Object.assign(header.style, styleObject);
            } else {
                Object.assign(header.style, unStyleObject);
            }
        },
        'false': function(direction) {
            if (direction === 'down') {
                header.classList.remove(options.classname);
            } else {
                header.classList.add(options.classname);
            }
        }
    }

    /* Main scroll function */
    let pageScrolled = (e) => {
        if (pageYOffset < options.topOffset) {
            return;
        }

        if (window.pageYOffset > prevScrollTop) {
            callbackMapper[options.defaultCss]('down')
        } else {
            callbackMapper[options.defaultCss]('up')
        }
        prevScrollTop = pageYOffset;
    };

    document.addEventListener('scroll', pageScrolled, false);

}

module.exports = {
    setScrollableHeader
};