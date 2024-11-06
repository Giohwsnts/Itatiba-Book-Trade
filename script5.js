function openQuestions() {
    document.getElementById("modalQuestions").style.display = "block";
}

function openExchange() {
    document.getElementById("modalExchange").style.display = "block";
}

function closeModal() {
    document.getElementById("modalQuestions").style.display = "none";
    document.getElementById("modalExchange").style.display = "none";
}

// Fecha o modal quando clicar fora dele
window.onclick = function(event) {
    const modalQuestions = document.getElementById("modalQuestions");
    const modalExchange = document.getElementById("modalExchange");
    if (event.target === modalQuestions) {
        modalQuestions.style.display = "none";
    }
    if (event.target === modalExchange) {
        modalExchange.style.display = "none";
    }
}

