function FadeInOnScroll(ObjectList){
    ObjectList.each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).fadeTo(750,1);
        }
    });
}

$(document).ready(function(){
    /*toggle menu*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    /*smooth scroll toc*/
    $('a[href^="#"].toc-href').on('click',function (e) {
        e.preventDefault();

        var offset = 0
        var target = this.hash;
        if (target.length){
            offset = $(target).offset().top
        }

        $('html, body').stop().animate({
            'scrollTop': offset
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });    
});
