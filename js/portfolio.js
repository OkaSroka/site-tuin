/*jslint
    this
*/
"use strict";
var $,
    document,
    window;
$(document).ready(function () {
    var $portfolioBlock = $('.block-item, .item-design');

    $(document).on('mousemove', function (e) {
        $portfolioBlock.each(function () {
            var $block = $(this),
                $blockHover = $block.find('.block-hover, .block-hover-design'),
                left = $block.offset().left,
                top = $block.offset().top - $(window).scrollTop(),
                bottom = top + $block.outerHeight(),
                right = left + $block.outerWidth(),
                allClasses = 'left top right bottom';

            if (e.clientX < left) {
                if (!$blockHover.hasClass('left')) {
                    $blockHover.removeClass(allClasses).addClass('left');
                }
            } else if (e.clientY < top) {
                if (!$blockHover.hasClass('top')) {
                    $blockHover.removeClass(allClasses).addClass('top');
                }
            } else if (e.clientX > right) {
                if (!$blockHover.hasClass('right')) {
                    $blockHover.removeClass(allClasses).addClass('right');
                }
            } else if (e.clientY > bottom) {
                if (!$blockHover.hasClass('bottom')) {
                    $blockHover.removeClass(allClasses).addClass('bottom');
                }
            }
        });
    });
});
