function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-this').offset().top;
    //alert(top)
    //alert(window_top)
    if (window_top >= top) {
        $('#stick-this').addClass('stick');
        //$('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#stick-this').removeClass('stick');
        //$('#stick-here').height(0);
    }

    if (window_top <= 330){
        $('#stick-this').removeClass('stick');
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});