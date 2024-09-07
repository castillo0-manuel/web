var modal = document.getElementById("miModal");
var btn = document.getElementById("miBoton");
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, se muestra el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando se hace clic en la 'X', se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Función para crear corazones en pantalla
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.body.appendChild(heart);

  // Posición inicial aleatoria en la pantalla
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración del efecto

  // Eliminar el corazón después de que termine la animación
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

// Al hacer clic en el botón "Sí", generar muchos corazones
document.getElementById("si").addEventListener("click", function () {
  setInterval(crearCorazon, 50); // Crear un corazón cada 200 ms
});

// Código para mostrar el modal cuando se hace clic en "No"
var modal = document.getElementById("miModal");
var btnNo = document.getElementById("miBoton");
var span = document.getElementsByClassName("close")[0];

btnNo.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}



