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

    var razon_real;
    if ($("#ddlRazonCon").val() == "3") {
        razon_real = "Otros";
    } else if ($("#ddlRazonCon").val() == "2") {
        razon_real = "Devolución";
    }
    else {
        razon_real = "Compra mayorista";
    };
    ///varielbe de envios de datos
    const contactData = {
        nombre_con: $("#txtNombreCon").val(),
        cedula_con: $("#txtCedulaCon").val(),
        correo_con: $("#txtCorreoCon").val(),
        telefono_con: $("#txtTelefonoCon").val(),
        razon_con: razon_real,
        otro_con: $("#txtOtrosCon").val()
    };
    //envio de datos
    set_datos_tbl_contactanos(contactData);
    swal("Enviado", "Pronto nos pondremos en contacto contigo!", "success");

    $("#txtNombreCon").val("");
    $("#txtCedulaCon").val("");
    $("#txtCorreoCon").val("");
    $("#txtTelefonoCon").val("");
    $("#ddlRazonCon").val("0");
    $("#txtOtrosCon").val("");

};

function set_datos_tbl_contactanos(contactData) {
    fetch('http://localhost:3000/tbl_contactanos', {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(contactData) // Convierte los datos a JSON para enviarlos
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
                alert('Error al enviar los datos');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
            console.error('Hubo un error al enviar los datos:', error);
            alert('Hubo un error al enviar los datos');
        });
};