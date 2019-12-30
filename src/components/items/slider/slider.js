


$('.slider__next').click(function () {
    let thisSlider = $(this).siblings('.slider-item.active');
    if ($(this).siblings('.slider-item:last').hasClass('active')) {
        $(this).siblings('.slider-item:first').addClass('active')
    }
    thisSlider.removeClass('active');
    thisSlider.next('.slider-item').addClass('active');

    let thisCircle = $(this).siblings('.slider__target').find('.slider__target-circle.active');
    if ($(this).siblings('.slider__target').find('.slider__target-circle:last').hasClass('active')){
        $(this).siblings('.slider__target').find('.slider__target-circle:first').addClass('active')
    }
    thisCircle.removeClass('active');
    thisCircle.next('.slider__target-circle').addClass('active');

});


$('.slider__prev').click(function () {
    let thisSlider = $(this).siblings('.slider-item.active');

    if ($(this).siblings('.slider-item:first').hasClass('active')) {
        $(this).siblings('.slider-item:last').addClass('active')
    }
    thisSlider.removeClass('active');
    thisSlider.prev('.slider-item').addClass('active');

    let thisCircle = $(this).siblings('.slider__target').find('.slider__target-circle.active');
    if ($(this).siblings('.slider__target').find('.slider__target-circle:first').hasClass('active')){
        $(this).siblings('.slider__target').find('.slider__target-circle:last').addClass('active')
    }
    thisCircle.removeClass('active');
    thisCircle.prev('.slider__target-circle').addClass('active');
});
