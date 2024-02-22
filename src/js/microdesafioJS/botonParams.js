function agregarBoton(texto, clase, id, deshabilitado) {
  const divRoot = document.getElementById("root");

  const boton = document.createElement("button");

  boton.innerHTML = texto;
  boton.className = clase;
  boton.id = id;
  boton.disabled = deshabilitado;

  boton.addEventListener("click", handleClick);
  divRoot.appendChild(boton);
}

function handleClick() {
  alert("Clickeaste el botón");
}

agregarBoton(
  "Este botón es personalizado",
  "myOtherButton",
  "myOtherButton",
  false
);
