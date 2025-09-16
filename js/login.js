const loginForm = document.getElementById("loginForm");
const loginRespuesta = document.getElementById("loginRespuesta");

// Usuario y contraseña de ejemplo
const usuarioAdmin = "admin";
const passwordAdmin = "12345";

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if(usuario === "" || password === ""){
    loginRespuesta.style.color = "red";
    loginRespuesta.textContent = "Por favor completa todos los campos.";
    return;
  }

  if(usuario === usuarioAdmin && password === passwordAdmin){
    loginRespuesta.style.color = "#8e2de2";
    loginRespuesta.textContent = "¡Acceso concedido!";
    // Aquí podrías redirigir a una página interna de administrador
    setTimeout(()=> { window.location.href = "admin.html"; }, 1000);
  } else {
    loginRespuesta.style.color = "red";
    loginRespuesta.textContent = "Usuario o contraseña incorrectos.";
  }
});
