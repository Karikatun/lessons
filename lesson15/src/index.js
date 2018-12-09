window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tabs = require('./parts/tabs'),
        reverseTimer = require('./parts/reverse_timer'),
        slider = require('./parts/slider'),
        descriptionModal = require('./parts/descriptionModal'),
        ancorLinks = require('./parts/anchorlinks'),
        form = require('./parts/form'),
        calc = require('./parts/calc');

    tabs();
    reverseTimer();
    slider();
    descriptionModal();
    ancorLinks();
    form();
    calc();

});