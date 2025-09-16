form.addEventListener("submit", function(e){
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if(nombre === "" || email === "" || mensaje === ""){
    respuesta.style.color = "red";
    respuesta.textContent = "Por favor completa todos los campos.";
    return;
  }

  if(!validarEmail(email)){
    respuesta.style.color = "red";
    respuesta.textContent = "Por favor ingresa un correo válido.";
    return;
  }

  // Guardar mensaje en localStorage
  let msgList = JSON.parse(localStorage.getItem("msgList")) || [];
  msgList.push({nombre,email,mensaje});
  localStorage.setItem("msgList", JSON.stringify(msgList));

  respuesta.style.color = "#8e2de2";
  respuesta.textContent = "¡Mensaje enviado correctamente!";
  form.reset();
});
