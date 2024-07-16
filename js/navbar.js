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