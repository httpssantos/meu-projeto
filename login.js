// Dados de exemplo do usuário
const usuarioValido = "admin";
const senhaValida = "12345";

// Lógica do login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === usuarioValido && password === senhaValida) {
        alert("Login bem-sucedido!");
        window.location.href = "gerador.html";  // Redireciona para a página do Gerador de OS
    } else {
        alert("Usuário ou senha inválidos.");
    }
});
