// Fetching Proyects and Creating Elements

const contenedor = document.querySelector(".contenedor");

proyectos.forEach(proyecto => {
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