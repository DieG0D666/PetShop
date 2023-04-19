$(document).ready(function() {
    $("#formreg").validate({
        rules: {
          inputnombres4: {
            required: true,
          },
          inputapellidos4: {
            required: true,
          },
          inputEmail4: {
            required: true,
            email: true,
          },
          inputrut4: {
            required: true,
          },
          floatingTextarea2: {
            required: true,
          },
          inputPassword1: {
            required: true,
            minlength: 6,
          },
          inputPassword4: {
            required: true,
            equalTo: "#inputPassword1",
          },
        }, // --> Fin de reglas
        messages: {
          inputnombres4: {
            required: "Por favor ingresa tus nombres",
          },
          inputapellidos4: {
            required: "Por favor ingresa tus apellidos",
          },
          inputEmail4: {
            required: "Por favor ingresa tu email",
            email: "Por favor ingresa un email válido",
          },
          inputrut4: {
            required: "Por favor ingresa tu RUT",
          },
          floatingTextarea2: {
            required: "Por favor ingresa tu dirección",
          },
          inputPassword1: {
            required: "Por favor ingresa una contraseña",
            minlength: "La contraseña debe tener al menos 6 caracteres",
          },
          inputPassword4: {
            required: "Por favor confirma tu contraseña",
            equalTo: "Las contraseñas no coinciden",
          },
        },
      });
  });

  