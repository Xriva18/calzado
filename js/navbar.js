$(document).ready(function () {
    // Selecciona todos los enlaces dentro de la lista y escucha el evento click
    $(".nav-item a").click(function (e) {
        // Previene el comportamiento predeterminado del enlace
        e.preventDefault();

        // Elimina la clase 'active' de todos los enlaces
        $(".nav-item a").removeClass("active");


        // Añade la clase 'active' al enlace sobre el que se hizo clic
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.dropdown-item').click(function () {
        // Remueve la clase 'active' de cualquier elemento que la tenga
        $('.nav-link').removeClass('active');
        // Añade la clase 'active' al enlace 'Otros'
        $('.nav-item.dropdown > a.nav-link').addClass('active');
    });
});

$(document).ready(function () {
    // Agrega un controlador de eventos 'click' al elemento '.navbar-brand'
    $(".navbar-brand").click(function () {
        // Elimina la clase 'active' de todos los elementos '.nav-item a'
        $(".nav-item a").removeClass("active");
    });
});