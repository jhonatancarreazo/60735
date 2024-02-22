function agregarBoton() {
  const divRoot = document.getElementById("root");

  const boton = document.createElement("button");

  boton.innerHTML = "Mi Botón";
  boton.className = "myButton";
  boton.id = "myButton";
  boton.disabled = false;
  boton.addEventListener("click", handleClick);
  divRoot.appendChild(boton);
}
const handleClick = () => {
  alert("hola mundo");
};
agregarBoton();
