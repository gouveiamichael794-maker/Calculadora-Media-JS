const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");

const painelResultado = document.getElementById("painelResultado");
const badgeStatus = document.getElementById("badgeStatus");
const txtMedia = document.getElementById("txtMedia");
const txtMensagem = document.getElementById("txtMensagem");

btnCalcular.onclick = function() {
    const val1 = inputNota1.value;
    const val2 = inputNota2.value;

    // Validação de segurança
    if (val1 === "" || val2 === "") {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }

    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        alert("As notas devem estar entre 0.0 e 10.0!");
        return;
    }

    const media = (n1 + n2) / 2;

    // Exibir o painel de resultados
    painelResultado.classList.remove("hidden", "aprovado", "recuperacao", "reprovado");
    txtMedia.innerText = `Média: ${media.toFixed(1)}`;

    if (media >= 7.0) {
        painelResultado.classList.add("aprovado");
        badgeStatus.innerText = "Aprovado";
        txtMensagem.innerText = "Excelente desempenho! Boas férias.";
    } else if (media >= 5.0) {
        painelResultado.classList.add("recuperacao");
        badgeStatus.innerText = "Em Recuperação";
        const falta = (7.0 - media).toFixed(1);
        txtMensagem.innerText = `Atenção: Você precisa de ${falta} pontos na prova final.`;
    } else {
        painelResultado.classList.add("reprovado");
        badgeStatus.innerText = "Reprovado";
        txtMensagem.innerText = "Rendimento insuficiente. Consulte seu tutor.";
    }
};

btnLimpar.onclick = function() {
    inputNota1.value = "";
    inputNota2.value = "";
    painelResultado.classList.add("hidden");
    inputNota1.focus();
};