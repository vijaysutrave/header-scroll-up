# header-scroll-up
### Medium-like header scroll on page scroll, and pulls the header back on page up scroll!

![Medium like header scroll](http://vijaysutrave.com/header-scroll.gif)

When you are building web pages with high text content, you do not want to distract the user with other elements on the screen. When the user is scrolling down your web page, you would want to hide the header elements assuming the reader is interested in reading further. On a scroll up event, you would show pull back the header assuming the reader wants to navigate elsewhere. This medium-like header show/hide is followed by various websites. 

This usecase could be more applicable on Mobile-sites where the effective viewport is not very significant, hence, you'd want to show / hide the header based on the scroll-event. 


## Install
    npm install header-scroll-up --save

### Usage
    let headerScroll = require ('header-scroll-up');
    
    headerScroll.setScrollableHeader('.header', {topOffset: 100});
   
### Parameters 
    Parameter 1 : Node / Query-selector
    Parameter 2 : Options Object (optional)

### Options
Option | Default | Description
------------ | ------------- | -------------------------
defaultCss | true | Whether you will use your own css / default css to be used, value in boolean.
animationDelay | 0.2 | The animation delay to show / hide the header, value in number.
topOffset | 0 | Header will be hidden only when the page scroll crosses this mark, value in px.
classname | null | When defaultCss is false, passing the classname is mandatory, value in string.

    Eg: headerScroll.setScrollableHeader('.header', {topOffset: 100, animationDelay: 0.5});
    
    
#### License
MIT © [vijaysutrave](https://github.com/vijaysutrave)
