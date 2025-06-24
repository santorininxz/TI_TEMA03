function verificarNumero() {
    const valor = parseFloat(document.getElementById("numero").value);
    let mensagem = "";

    if (isNaN(valor)) {
        mensagem = "Por favor, digite um número válido.";
    } else if (valor > 0) {
        mensagem = "O número é positivo.";
    } else if (valor < 0) {
        mensagem = "O número é negativo.";
    } else {
        mensagem = "O número é zero.";
    }

    document.getElementById("resultado").innerText = mensagem;
}