$(document).ready(function () {
    // Función para mostrar el slider actual y ocultar los demás
    function showCurrentSlider(index) {
        // Oculta todos los sliders
        $('.carousel-item').removeClass('active');
        // Muestra solo el slider actual
        $(`.carousel-item:eq(${index})`).addClass('active');
    }

    // Evento para el botón "Next"
    $('.carousel-control-next').click(function () {
        let currentIndex = $('.carousel-item.active').index();
        let nextIndex = (currentIndex + 1) % $('.carousel-item').length;
        showCurrentSlider(nextIndex);
    });

    // Evento para el botón "Prev"
    $('.carousel-control-prev').click(function () {
        let currentIndex = $('.carousel-item.active').index();
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = $('.carousel-item').length - 1;
        }
        showCurrentSlider(prevIndex);
    });
});