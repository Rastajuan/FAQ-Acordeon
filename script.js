//Recogemos los botones
const icons = document.querySelectorAll('.plus');

//Creamos una funcion para que al hacer click en document.
icons.forEach((img) => {
  img.addEventListener("click", function () {
    
    let p = this.parentElement.nextElementSibling;
    let h2img = this.parentElement.querySelector("img");

    if (p.classList.contains("invisible")) {
      p.classList.remove("invisible");
      p.classList.add("visible");
      h2img.src = "./assets/images/icon-minus.svg";
    } else {
      p.classList.remove("visible");
      p.classList.add("invisible");
      h2img.src = "./assets/images/icon-plus.svg";
    }
  });
});