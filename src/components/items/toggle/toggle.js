
$(function(){
    $('.toggle').click(function (e, changeState) {

        if (changeState === undefined) {

            $(this).toggleClass('toggle-on');
        }


        if ($(this).hasClass('toggle-on')) {
            $(this).trigger('on.toggle');
        } else {
            $(this).trigger('off.toggle');
        }
    });


    $('.toggle').on('on.toggle', function () {
        $(this).addClass('toggle-on');
    });
    $('.toggle').on('off.toggle', function () {
        $(this).removeClass('toggle-on');
    });
    
});
