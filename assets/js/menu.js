$(function(){
    $(window).scroll(function() {
        let top = $(document).scrollTop();
        if (top < 57) $('.header__navigation').css({top: '0', position: 'relative'});
        else $('.header__navigation').css({top: '0', position: 'fixed',width:'100%',minWidth:'980px'});
    });
});