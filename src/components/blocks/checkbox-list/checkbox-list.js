$(document).ready(function() {
    $(".checkbox-list__title").next().slideToggle();

    // Функция для складки\разворачивания списка.
    $(".checkbox-list__title").click(function() {
        $(this).next().slideToggle();

        // Получаем значение стрелочки и заменяем при основном действии.
        let arror = $(this).children('.checkbox-list__arror');
        if (arror.text() == 'keyboard_arrow_up') {
            arror.text('keyboard_arrow_down')
        } else {
            arror.text('keyboard_arrow_up');
        }
    });
});
