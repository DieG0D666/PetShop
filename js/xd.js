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
        }, // Fin de reglas
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

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =function (){
  if (this.readyState ==4 && this.status == 200) {
    document.getElementById('menulogin').outerHTML
    = this.responseText;
  }
}
xhttp.open('GET', 'menulogin.html',true);
xhttp.send();



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =function (){
  if (this.readyState ==4 && this.status == 200) {
    document.getElementById('menu').outerHTML
    = this.responseText;
  }
}
xhttp.open('GET', 'menu.html',true);
xhttp.send();



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =function (){
  if (this.readyState ==4 && this.status == 200) {
    document.getElementById('footer').outerHTML
    = this.responseText;
  }
}
xhttp.open('GET', 'footer.html',true);
xhttp.send();


$(document).ready(function () {

  $.get('https://fakestoreapi.com/products/category/men\'s%20clothing', function (data) {

    $.each(data, function (i, item) {

      var card = '';
      card += '<div class="col-lg-3 col-md-4 col-sm-6 mb-4">';
      card += '  <div class="card h-100">';
      card += '    <img src="' + item.image + '" class="card-img-top" alt="' + item.title + '">';
      card += '    <div class="card-body">';
      card += '      <h5 class="card-title">' + item.title + '</h5>';
      card += '      <p class="card-text">';
      card += '        <span class="stock">' + item.category + '</span>';
      card += '      </p>';
      card += '    </div>';
      card += '  </div>';
      card += '</div>';

      $('#contenedor-productos').append(card);

    });

  });

  $.get('https://fakestoreapi.com/products/category/women\'s%20clothing', function (data) {

    $.each(data, function (i, item) {

      var card = '';
      card += '<div class="col-lg-3 col-md-4 col-sm-6 mb-4">';
      card += '  <div class="card h-100">';
      card += '    <img src="' + item.image + '" class="card-img-top" alt="' + item.title + '">';
      card += '    <div class="card-body">';
      card += '      <h5 class="card-title">' + item.title + '</h5>';
      card += '      <p class="card-text">';
      card += '        <span class="stock">' + item.category + '</span>';
      card += '      </p>';
      card += '    </div>';
      card += '  </div>';
      card += '</div>';

      $('#contenedor-productos').append(card);

    });

  });

});

function hideDescription(card) {
  var desc = card.querySelector('.card-text');
  desc.style.display = 'none';
}

function showDescription(card) {
  var desc = card.querySelector('.card-text');
  desc.style.display = 'block';
}

function hideDescription2(card) {
  var desc = card.querySelector('.butoncito');
  desc.style.display = 'none';
}

function showDescription2(card) {
  var desc = card.querySelector('.butoncito');
  desc.style.display = 'block';
}
