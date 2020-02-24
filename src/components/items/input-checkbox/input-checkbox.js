$(document).ready(function(){
    $('.input-checkbox').click(function(){
        let child = $(this).children('.input-checkbox__checkbox');
        if (child.hasClass('input-checkbox__checkbox_active')) {
            child.removeClass('input-checkbox__checkbox_active');
            child.text('');
        } else {
            child.addClass('input-checkbox__checkbox_active');
            child.text('check');
        }
    });
});