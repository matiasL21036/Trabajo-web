const userNameField = document.querySelector("[name=inputNombre]");
const emailField = document.querySelector("[name=inputEmail]");
const PasswordField = document.querySelector("[name=inputPassword]");
const ConfirmPassword = document.querySelector("[name=inputConfirmPassword]");

const validateEmptyField = (field) => {
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
};

userNameField.addEventListener("blur", function () {
    validateEmptyField(userNameField);
});

emailField.addEventListener("blur", function () {
    validateEmptyField(emailField);
});

PasswordField.addEventListener("blur", function () {
    validateEmptyField(PasswordField);
});

ConfirmPassword.addEventListener("blur", function () {
    validateEmptyField(ConfirmPassword);
});
