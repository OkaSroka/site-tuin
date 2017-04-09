/*jslint
    this
*/
"use strict";
var $,
    document,
    window;

$(document).ready(function () {
    var lock = false,
        $portfolioWrapper = $('.portfolio-row-pictures'),
        portfolioWidth = $portfolioWrapper.outerWidth();

    $(window).on('scroll', function () {
        var windowScroll = $(window).scrollTop();
        var $dark = $('.portfolio-column-project.night');
        if ($dark.length) {
            var targetPosition = $dark.offset().top;

            if (windowScroll > targetPosition - 260) {
                $('body').addClass("dark");
            } else {
                $('body').removeClass("dark");
            }
        }
    });

    $('.portfolio-row-pictures').each(function () {
        var gal = $(this);
        var big = gal.find('.big');
        big.on('load', function () {
            lock = false;
            big.animate({opacity: 1}, 300);
        });

        var thumbs = gal.find('.mini-slider-portfolio img');
        var mover = gal.find('.mini-portfolio-move');
        var pos;
        thumbs.each(function (i) {
            var thumb = $(this);
            thumb.click(function () {
                if (!lock) {
                    if (!thumb.hasClass('active')) {
                        thumbs.removeClass('active');
                        thumb.addClass('active');
                        big.animate({opacity: 0}, 300, function () {
                            big.attr('src', thumb.attr('data-big'));
                        });
                        lock = true;
                    }

                    if (portfolioWidth < 440) {
                        pos = Math.min(Math.max(i - 1, 0), thumbs.length - 3);
                        if (thumbs.length < 3) {
                            pos = 0;
                        }
                    } else if (portfolioWidth < 590) {
                        pos = Math.min(Math.max(i - 1, 0), thumbs.length - 4);
                        if (thumbs.length < 4) {
                            pos = 0;
                        }
                    } else if (portfolioWidth > 590) {
                        pos = Math.min(Math.max(i - 1, 0), thumbs.length - 6);
                        if (thumbs.length < 6) {
                            pos = 0;
                        }
                    }

                    if (portfolioWidth > 300) {
                        mover.css('margin-left', -pos * 149);
                    } else {
                        mover.css('margin-left', -pos * 101);
                    }
                }
            });
        }).first().addClass('active');

        if (portfolioWidth < 440) {
            if (thumbs.length < 3) {
                pos = 0;
            }
        } else if (portfolioWidth < 590) {
            if (thumbs.length < 4) {
                pos = 0;
            }
        } else if (portfolioWidth > 590) {
            if (thumbs.length < 6) {
                pos = 0;
            }
        }

        if (portfolioWidth > 300) {
            mover.css('margin-left', -pos * 149);
        } else {
            mover.css('margin-left', -pos * 101);
        }
    });
});