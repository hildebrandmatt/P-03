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

////////////////////////
//BOWTIE SPIN FUNCTION//
////////////////////////

$(".footer-logo").addClass("wiggle")

$(".footer-logo").click(function(){
    spinBowtie()
})

function spinBowtie() {
    if($(".footer-logo").hasClass("wiggle")) {
        $(".footer-logo").removeClass("wiggle")
        setTimeout(function() {
            spin()
        }, 200)
        setTimeout(function() {
            resetBowtie()
        }, 3700)
    }
}

function spin() {
    $(".footer-logo").addClass("spinBowtie")
}

function resetBowtie() {
    $(".footer-logo").removeClass("spinBowtie")
    $(".footer-logo").addClass("wiggle")
}