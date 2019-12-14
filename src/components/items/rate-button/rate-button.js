
$(document).ready(function(){
    $('.rate-button .rate-button__star').on('mouseover', function(){
        // Получаем номер data-value и переводим в числовое значение.
        var onStar = parseInt($(this).data('value'), 10); 

        // Заменяем 'star' до выбранного элемента включительно, и на 'star_border' после через родителя.
        $(this).parent().children('.rate-button__star').each(function(e){
            if (e <= onStar) {
                $(this).text('star');
            } else {
                $(this).text('star_border');
            }
        });     
    });
});