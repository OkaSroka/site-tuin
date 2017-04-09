/*jslint
    this
*/
"use strict";
var $,
    document,
    window,
    setTimeout,
    activeSlide = 0,
    hoveredDot = 1;

$(document).ready(function () {
    var $headerWrapper = $('.header-wrapper'),
        $topHeader = $headerWrapper.offset().top,
        $service = $('.services, .menu-sub'),
        $menuSub = $('.menu-sub'),
        $caption = $('.caption-quality, .caption-aside'),
        $buttonWrap = $('.button-wrap'),
        $frame = $('.frame'),
        $letter = $('.letter'),
        $hamburger = $('.hamburger'),
        $menuLeft = $('.menu-left'),
        $withMenu = $menuLeft.find('.with-menu');

    $hamburger.on('click', function () {
        $(this).toggleClass('open');
        $menuLeft.toggleClass('active');
    });

    $withMenu.each(function () {
        var $liItem = $(this),
            $link = $liItem.find('a');

        $link.on('touchstart', function (e) {
            if (!$liItem.hasClass('li-active')) {
                e.preventDefault();
                $liItem.addClass('li-active');
            }
        });
    });

//Animacja nagłówka
    $(window).on('scroll', function () {
        var windowScroll = $(window).scrollTop();
        if (windowScroll > $topHeader) {
            $headerWrapper.find('.moving-menu').addClass('fixed');
        } else {
            $headerWrapper.find('.moving-menu').removeClass('fixed');
        }
    });
    $service.on('mouseleave', function () {
        $menuSub.removeClass('visible');
    });

//Animacja napisów i przycisku po lewej
    $caption.addClass('slide');
    $buttonWrap.addClass('slide-button');
    $frame.addClass('scale');

//Animacja liter - wczytywanie po jednej literze w Projektowanie ogrodów
    $letter.each(function (index, element) {
        setTimeout(function () {
            $(element).addClass('show');
        }, index * 100);
    });
});
