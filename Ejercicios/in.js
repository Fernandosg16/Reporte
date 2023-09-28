// Simular un inicio de sesión y almacenamiento temporal de usuarios
const users = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert("Inicio de sesión exitoso.");
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
