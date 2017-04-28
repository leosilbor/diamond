'use strict';

$(document).ready(function(){
    
    
    
    // yamm menu
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });
    
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });
    
    //tootltip
    $('[data-toggle="tooltip"]').tooltip();
    
    //Popover
    $('[data-toggle="popover"]').popover();
    
    
    
    //back to top
    $('body').append('<a href="javascript:void(0);" id="back-to-top"><i class="fa fa-angle-up"></i></a>');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });
        
    
    
});