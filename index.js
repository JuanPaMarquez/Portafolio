const contenedor = document.querySelector(".contenedor");

async function getProjects() {
  const listarProyectos = await fetch("utils/proyectos.json")
    .then(response => response.json())
    .then(data => data.proyectos)
  return listarProyectos;
}

getProjects().then(data => {
  data.forEach(proyecto => {
    const div = document.createElement("div");
    div.classList.add("proyect");

    const img = document.createElement("img");
    img.src = proyecto.img;

    const a = document.createElement("a");
    a.classList.add("project-tile");
    a.href = proyecto.link;
    a.innerText = proyecto.titulo;
    a.target = "_blank";
    
    div.appendChild(img);
    div.appendChild(a);
    contenedor.appendChild(div);
  })
})

const links = document.querySelector(".links")

async function getRedes() {
  const listarRedes = await fetch("utils/redes.json")
    .then(response => response.json())
    .then(data => data.redes)
  return listarRedes;
}

getRedes().then(data => {
  data.forEach(red => {
    console.log(red)
    const a = document.createElement("a")
    a.id = "profile-link";
    a.href = red.link;
    a.target = "_blank";

    const i = document.createElement("i");
    i.className = red.icon
    i.innerText = " " + red.nombre;

    a.appendChild(i);
    links.appendChild(a);
  })
})


async function copyToClipboard() {
  // Seleccionar el texto dentro del elemento de correo electrónico
  const emailElement = document.getElementById("email");
  const emailText = emailElement.textContent || emailElement.innerText;
 
  try {
    await navigator.clipboard.writeText(emailText);
    alert("Correo electrónico copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el correo electrónico", err);
  }
}