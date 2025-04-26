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

    $(window).on('mousemove', function(e) {
        x = e.pageX;
        y = e.pageY;
    });

    $('.hamburger, .menu-inner').on('mouseenter', function() {
        console.log('Menu expanded');
        $(this).parent().addClass('expanded');
        menuExpanded = true;
    });

    $('.menu-inner').on('mouseleave', function() {
        console.log('Menu collapsed');
        menuExpanded = false;
        $(this).parent().removeClass('expanded');
    });

    function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    var hoverZone = 150;
    var expandAmount = 20;
}
