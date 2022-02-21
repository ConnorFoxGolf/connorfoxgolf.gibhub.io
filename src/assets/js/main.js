import $ from 'jquery';
var originalPaddingHeight;

$(document).ready(function()
{
    originalPaddingHeight = parseFloat($('#header').css('padding-top'));
    window.onscroll = scroll_header;
    scroll_header();
});

/* Shrink or Grow header and fade background image based on location on page */
export function scroll_header()
{
    var scrollAmount = window.pageYOffset;
    if( scrollAmount > originalPaddingHeight )
    {
        scrollAmount = originalPaddingHeight;
    }
    /* Shrink header */
    $('#header').css('padding-bottom', originalPaddingHeight - scrollAmount);

    $('#header').css('background-size', 'cover');
}
