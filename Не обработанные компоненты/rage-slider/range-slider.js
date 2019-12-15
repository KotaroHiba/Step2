

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 5000,
    step: 1,
    values: [540, 1020],
    slide: function (e, ui) {
        var hours1 = ui.values[0];
        var minutes1 = ui.values[0];
        $('.slider-time').html(hours1 + ':' + minutes1);
        var hours2 =ui.values[1];
        var minutes2 = ui.values[1];
        $('.slider-time2').html(hours2 + ':' + minutes2);
    }
});