const nombreproducto = document.querySelector("[name=nombreproducto]");
const imagenproducto = document.querySelector("[name=imagen]");
const cantidadproducto = document.querySelector("[name=cantidad]");
const precio = document.querySelector("[name=precio]");

const validacionproducto = (field) => {

    const valor = field.value;
    if (field.value.length == 0) {
        field.classList.add("invalido");
        field.nextElementsibling.classList.add("Error");
        field.nextElementSibling.innerText = "No dejar Campos vacios";
    } else {
        field.classList.remove("invalido");
        field.nextElementSibling.classList.remove("Error");
        field.nextElementSibling.innerText = "";
    }
}



nombreproducto.addEventListener("blur", validacionproducto);

cantidadproducto.addEventListener("blur", validacionproducto);

precio.addEventListener("blur", validacionproducto);

imagenproducto.addEventListener("change"), function () {
    const file = imagenproducto.files[0];
    if (!file) {
        alert("Seleccione una imagen");
        return;
    }

    // Comprueba que el archivo es una imagen
    const mimeType = file.type;
    if (!mimeType.startsWith("image/")) {
        alert("Seleccione un archivo de imagen");
        return;
    }

    // Comprueba que el tamaño de la imagen sea menor a 5 MB
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        alert("La imagen debe ser menor a 5 MB");
        return;
    }
}    
