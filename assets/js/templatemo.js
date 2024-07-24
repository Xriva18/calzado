
'use strict';
$(document).ready(function () {

  // Accordion
  var all_panels = $('.templatemo-accordion > li > ul').hide();

  $('.templatemo-accordion > li > a').click(function () {
    console.log('Hello world!');
    var target = $(this).next();
    if (!target.hasClass('active')) {
      all_panels.removeClass('active').slideUp();
      target.addClass('active').slideDown();
    }
    return false;
  });
  // End accordion

  // Product detail
  $('.product-links-wap a').click(function () {
    var this_src = $(this).children('img').attr('src');
    $('#product-detail').attr('src', this_src);
    return false;
  });
  $('#btn-minus').click(function () {
    var val = $("#var-value").html();
    val = (val == '1') ? val : val - 1;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $('#btn-plus').click(function () {
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    $("#product-quanity").val(val);
    return false;
  });

  ///se selecionan tallas
  $('.btn-size').click(function () {
    var this_val = $(this).data('value'); // Obtener el valor de la talla del atributo data-value
    $("#product-size").val(this_val); // Actualizar el campo oculto con la talla seleccionada
    $(".btn-size").removeClass('btn-secondary').addClass('btn-primary'); // Reiniciar el estado de los botones
    $(this).removeClass('btn-primary').addClass('btn-secondary'); // Aplicar el estado activo al botón seleccionado
    return false;
  });
  // End roduct detail

});
