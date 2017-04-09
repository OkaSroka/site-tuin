/*jslint
    this
*/
"use strict";
var $;
$(function () {
    var $imageSlider = $('.image-slider'),
        $simplesDesign = $('.garden-design-simples'),
        $item = $simplesDesign.find('.item-design'),
        $close = $('.close-button'),
        $arrowRight = $('.arrow.right'),
        $arrowLeft = $('.arrow.left'),
        currentSlide = 0,
        allSlides = $item.length,
        $big = $imageSlider.find('.big'),
        lock = false;

    $big.on('load', function () {
        lock = false;
        $big.animate({opacity: 1}, 300);
    });

    function selectSlide(number, first) {
        if (!lock) {
            var imageSource = $item.eq(number).find('img').attr('data-big');
            currentSlide = number;

            if (first) {
                $big.css({opacit: 0}).attr('src', imageSource);
            } else {
                $big.animate({opacity: 0}, 300, function () {
                    $big.attr('src', imageSource);
                });
            }
            lock = true;
        }
    }

    function selectNextSlide() {
        var nextSlide = (currentSlide + 1) % allSlides;
        selectSlide(nextSlide);
    }

    function selectPreviousSlide() {
        var prevSlide = (currentSlide + allSlides - 1) % allSlides;
        selectSlide(prevSlide);
    }

    $arrowRight.on('click', function () {
        selectNextSlide();
    });

    $arrowLeft.on('click', function () {
        selectPreviousSlide();
    });

    $close.on('click', function () {
        $imageSlider.removeClass('slide');
    });

    $item.each(function (index) {

        $(this).on('click', function () {
            selectSlide(index, true);
            $imageSlider.addClass('slide');
        });
    });
});