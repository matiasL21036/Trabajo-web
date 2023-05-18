const nombrelogin=document.querySelector("[name=nombrelogin]");
const passwordlogin=document.querySelector("[name=passwordlogin]");
const CorreoElogin=document.querySelector("[name=CorreoE]");

const Validar=(field)=>{
    const fieldValue = field.value;
    if (fieldValue.length === 0) {
        field.classList.add("invalido");
        field.nextElementSibling.classList.add("Error");
        field.nextElementSibling.innerText = "No dejar Campos vacios";
    } else {
        field.classList.remove("invalido");
        field.nextElementSibling.classList.remove("Error");
        field.nextElementSibling.innerText = "";
    }
}
nombrelogin.addEventListener("blur",function(){
    Validar(nombrelogin);
});

passwordlogin.addEventListener("blur",function(){
    Validar(passwordlogin);
});

CorreoElogin.addEventListener("blur",function(){
    Validar(CorreoElogin);
});
const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario

const hayErrores = validarCampos();
if (!hayErrores) {
    // Si no hay errores, envía el formulario
    document.querySelector("form").submit();
}
});
