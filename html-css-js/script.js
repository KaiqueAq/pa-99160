function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parentInt(numeroInput.value);

    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero) || numero === null || numero === ""){
        resultadoDiv.innerHTML = "<p>Por favor, digite um número...</p>";
        return;
    }

    resultadoDiv.innerHTML += `<h2>Tabuada do numero: ${numero}</h2>`;

    for(let i = 1; i<= 10; i++){
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p> ${numero} x ${i} = ${resultado} </p>`;

    }
}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerarTabuada);