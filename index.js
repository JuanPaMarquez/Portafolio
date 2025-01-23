// Fetching Proyects and Creating Elements

const contenedor = document.querySelector(".contenedor");

proyectos.forEach(proyecto => {
  const div = document.createElement("div");
  div.classList.add("proyect");

  const imgInfo = document.createElement("div");
  imgInfo.classList.add("img-info");

  const img = document.createElement("img");
  img.src = proyecto.img;

  const barraBotones = document.createElement("div")
  barraBotones.classList.add("barra-botones")

  const infoProject = document.createElement("div");
  infoProject.classList.add("info-project")

  const infoTitulo = document.createElement("h3")
  infoTitulo.innerText = proyecto.titulo;
  const infoTexto = document.createElement("p")
  infoTexto.innerText = proyecto.info;
  infoProject.appendChild(infoTitulo)
  infoProject.appendChild(infoTexto)

  const gitButton = document.createElement("a");
  gitButton.classList.add("github");
  gitButton.href = proyecto.github;
  gitButton.target = "_blank"
  gitButton.innerText = "GitHub"

  const a = document.createElement("a");
  a.classList.add("project-tile");
  a.href = proyecto.link;
  a.innerText = "Ver Proyecto";
  a.target = "_blank";
  
  imgInfo.appendChild(img);
  imgInfo.appendChild(infoProject);
  div.appendChild(imgInfo);
  barraBotones.appendChild(gitButton);
  barraBotones.appendChild(a);
  div.appendChild(barraBotones)
  contenedor.appendChild(div);
})

// Fetching SocialMedia and Creating Elements

const links = document.querySelector(".links")

redes.forEach(red => {
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

// Copying Email to Clipboard

async function copyToClipboard() {
  const emailElement = document.getElementById("email");
  const emailText = emailElement.textContent || emailElement.innerText;
 
  try {
    await navigator.clipboard.writeText(emailText);
    alert("Correo electrónico copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el correo electrónico", err);
  }
}

const copy = document.getElementById("copy");
copy.addEventListener("click", copyToClipboard);