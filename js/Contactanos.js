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
    if ($("#txtNombreCon").val() == "") {
        swal("Error", "El campo Nombre es obligatorio", "error");
        return false;
    }
    if ($("#txtCedulaCon").val() == "") {
        swal("Error", "El campo Cedula es obligatorio", "error");
        return false;
    }
    if ($("#txtCorreoCon").val() == "") {
        swal("Error", "El campo Correo es obligatorio", "error");
        return false;
    }
    if ($("#txtTelefonoCon").val() == "") {
        swal("Error", "El campo Telefono es obligatorio", "error");
        return false;
    }
    if ($("#ddlRazonCon").val() == "0") {
        swal("Error", "El campo Razon es obligatorio", "error");
        return false;
    }
    if ($("#ddlRazonCon").val() == "3" && $("#txtOtrosCon").val() == "") {
        swal("Error", "El campo Observacion es obligatorio", "error");
        return false;
    }
    swal("Enviado", "Pronto nos pondremos en contacto contigo!", "success");

};

