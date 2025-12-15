// ==========================
// Sistema de Login
// ==========================
function login() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // LOGIN FALSO – apenas para demonstração
    if(email === 'admin@gmail.com' && senha === '1234') {
        // Redireciona para dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// ==========================
// Função de logout (se for usar dashboard)
// ==========================
function logout() {
    alert("Você saiu do sistema.");
    window.location.href = "index.html";
}

// ==========================
// Exemplo de outras funções
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Produto adicionado ao carrinho!");
        });
    });
});
