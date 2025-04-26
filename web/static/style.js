$(document).ready(function() {
    var height = window.innerHeight,
        x = 0,
        y = height / 2,
        curveX = 10,
        curveY = 0,
        targetX = 0,
        xitteration = 0,
        yitteration = 0,
        menuExpanded = false;

    var blob = $('#blob'),
        blobPath = $('#blob-path'),
        hamburger = $('.hamburger');

    console.log('jQuery loaded:', typeof $ !== 'undefined');
    console.log('Blob element:', blob.length);
}
