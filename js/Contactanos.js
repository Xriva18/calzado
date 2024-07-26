$(document).ready(function () {
    $("#ExcepcionObservacion").hide();

});
$("#ddlRazonCon").change(function () {
    if ($(this).val() == '3') {
        $("#ExcepcionObservacion").show();
    } else {
        $("#ExcepcionObservacion").hide();
    }
});

function validacionContacto() {
    swal("Enviado", "Pronto nos pondremos en contacto contigo!", "success");

};

