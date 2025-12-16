// ==========================
// Sistema de Login
// ==========================
function login() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // LOGIN SIMPLES (DEMO)
    if(email === 'admin@gmail.com' && senha === '1234') {

        // 🔐 MARCA USUÁRIO COMO LOGADO
        localStorage.setItem("logado", "true");
        localStorage.setItem("usuarioLogado", email);

        // ➡️ REDIRECIONA PARA A LOJA / DASHBOARD
        window.location.href = "dashboard.html";

    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// ==========================
// PROTEÇÃO DE PÁGINA
// (use no dashboard / loja)
// ==========================
if (
    document.body.dataset.protected === "true" &&
    localStorage.getItem("logado") !== "true"
) {
    window.location.href = "index.html";
}

// ==========================
// Função de logout
// ==========================
function logout() {
    localStorage.removeItem("logado");
    localStorage.removeItem("usuarioLogado");

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

            // 🔒 SÓ PERMITE SE ESTIVER LOGADO
            if(localStorage.getItem("logado") !== "true"){
                alert("Faça login para comprar!");
                window.location.href = "index.html";
                return;
            }

            alert("Produto adicionado ao carrinho!");
        });
    });
});
