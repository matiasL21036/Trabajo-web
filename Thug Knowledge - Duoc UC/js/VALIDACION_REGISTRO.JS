const userNameField=document.querySelector("[name=inputNombre]");
const emailField=document.querySelector("[name=inputEmail]");
const PasswordField=document.querySelector("[name=inputPassword]");
const ConfirmPassword=document.querySelector("[name=inputConfirmPassword]");

userNameField.addEventListener("blur",function(e){
    const field=e.target;
    const fieldvalue=e.target.value;
    if(fieldvalue.lenght == 0){
        field.classList.add("invalido");
        field.nextElementSibling.classList.add("Error");
        field.nextElementSibling.innerHTML="userName is required";
    }
})