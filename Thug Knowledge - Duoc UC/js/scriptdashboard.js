const listUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let tableBody = ``;
    users.forEach((user, index) => {
        tableBody += `<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        </tr>`;
    });
    // document.getElementById("tableBody_Users").innerHTML = tableBody;
    tablausuarios.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});