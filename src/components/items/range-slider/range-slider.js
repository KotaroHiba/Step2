$(".range-slider__double").slider({
    range: true,
    min: 0,
    max: 15000,
    step: 1,
    values: [5000, 10000],
    slide: function (e, ui) {
        // Получаем значения с ползунка и переводим в строковой тип.
        let from = ui.values[0].toString();
        let to = ui.values[1].toString();

        // Раделяем разряды цифр пробелами и приписываем валюту.
        from = from.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        to = to.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

        // Находим родителя данного слайдера и изменям в нём значения.
        let parent = $(this).parent('.range-slider');
        parent.find('.range-slider__range').text(`${from}₽ - ${to}₽`);
    }
});