window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tabs = require('./parts/tabs.js'),
        reverseTimer = require('./parts/reverse_timer.js'),
        slider = require('./parts/slider.js'),
        descriptionModal = require('./parts/descriptionModal.js'),
        ancorLinks = require('./parts/anchorlinks.js'),
        form = require('./parts/form.js'),
        calc = require('./parts/calc.js');

    tabs();
    reverseTimer();
    slider();
    descriptionModal();
    ancorLinks();
    form();
    calc();

});