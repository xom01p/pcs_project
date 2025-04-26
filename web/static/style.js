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

    function svgCurve() {
        if (Math.abs(curveX - x) < 1) {
            xitteration = 0;
        } else {
            if (menuExpanded) {
                targetX = 0;
            } else {
                xitteration = 0;
                targetX = x > hoverZone ? 0 : -(((60 + expandAmount) / 100) * (x - hoverZone));
            }
            xitteration++;
        }

        if (Math.abs(curveY - y) < 1) {
            yitteration = 0;
        } else {
            yitteration++;
        }

        curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
        curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

        var anchorDistance = 200;
        var curviness = anchorDistance - 40;

        var newCurve = `M60,${height}H0V0h60v${curveY - anchorDistance}c0,${curviness},${curveX},${curviness},${curveX},${anchorDistance}S60,${curveY},60,${curveY + anchorDistance * 2}V${height}z`;

        blobPath.attr('d', newCurve);
        blob.width(curveX + 60);

        hamburger.css('transform', `translate(${curveX}px, ${curveY}px)`);

        window.requestAnimationFrame(svgCurve);
    }
}
