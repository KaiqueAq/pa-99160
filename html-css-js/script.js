
// --- LÓGICA DO MENU DE NAVEGAÇÃO ---
function irParaSecao(secaoId) {
    // Oculta todas as seções
    document.querySelectorAll('section').forEach(sec => {
        sec.style.display = 'none';
    });
    
    // Mostra apenas a seção clicada
    document.getElementById(secaoId).style.display = 'block';
}

// Mostrar a primeira seção ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    irParaSecao('sec1');
});

function gerarTabuada() {
    // Pegar o valor do input no HTML.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Pega o elemento HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verifica se a entrada é um número válido.
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número...</p>";
        return;
    }

    // Adiciona um título para tabuada. 
    resultadoDiv.innerHTML += `<h2>Tabuada do número: ${numero}</h2>`;

    // Laço de repetição para gerar a tabuada de 1 até 10.
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerarTabuada);


function media() {
    const nomeInput = document.getElementById("numeroInput");
    const nota1Input = document.getElementById("numeroInput2");
    const nota2Input = document.getElementById("numeroInput3");
    const divResultado = document.getElementById("resultadoMedia");

    let nome = nomeInput.value;
    let nota1 = parseFloat(nota1Input.value);
    let nota2 = parseFloat(nota2Input.value);

    if (nome === '' || isNaN(nota1) || isNaN(nota2)) {
        divResultado.innerHTML = '<p style="color: red;">Por favor, preencha tudo corretamente.</p>';
        return;
    }

    const mediaCalc = (nota1 + nota2) / 2;
    let status = mediaCalc >= 7 ? 'APROVADO(A) 🎉' : 'REPROVADO(A) 😢';
    let classeCss = mediaCalc >= 7 ? 'aprovado' : 'reprovado';

    divResultado.innerHTML = `
        <div class="card-resultado ${classeCss}">
            <p><strong>Aluno:</strong> ${nome}</p>
            <p><strong>Média Final:</strong> ${mediaCalc.toFixed(1)}</p>
            <p><strong>Status:</strong> ${status}</p>
        </div>`;
}

const gerarBotao2 = document.getElementById("gerarBotao2");
gerarBotao2.addEventListener("click", media);







// // --- LÓGICA DA CALCULADORA DE MÉDIA ---
// function calcularMedia() {
//     const nome = document.getElementById('nomeInput').value;
//     const nota1 = parseFloat(document.getElementById('nota1Input').value);
//     const nota2 = parseFloat(document.getElementById('nota2Input').value);
//     const divResultado = document.getElementById('resultadoMedia');

//     // Validação: verifica se os campos estão preenchidos corretamente
//     if (nome === '' || isNaN(nota1) || isNaN(nota2)) {
//         divResultado.innerHTML = '<p style="color: red;">Por favor, preencha o nome e as duas notas corretamente.</p>';
//         return;
//     }

//     // Calculando a média aritmética
//     const media = (nota1 + nota2) / 2;
    
//     // Verificando se foi aprovado ou reprovado (Média 7)
//     let status = '';
//     let classeCss = '';

//     if (media >= 7) {
//         status = 'APROVADO(A) 🎉';
//         classeCss = 'aprovado';
//     } else {
//         status = 'REPROVADO(A) 😢';
//         classeCss = 'reprovado';
//     }

// Mostrando o resultado na tela construindo o HTML
// divResultado.innerHTML = `
//     <div class="card-resultado ${classeCss}">
//         <p><strong>Aluno:</strong> ${nome}</p>
//         <p><strong>Média Final:</strong> ${media.toFixed(1)}</p>
//         <p><strong>Status:</strong> ${status}</p>
//     </div>`;
// }


// // --- LÓGICA DA TABUADA ---
// function gerarTabuada() {
//     const inputNumero = document.getElementById('numeroTabuada');
//     const divResultado = document.getElementById('resultadoTabuada');
//     const numero = Number(inputNumero.value);

//     if (inputNumero.value === '') {
//         divResultado.innerHTML = '<p style="color: red;">Digite um número!</p>';
//         return;
//     }

//     divResultado.innerHTML = `<h3>Tabuada do ${numero}</h3><br>`;

//     for (let i = 1; i <= 10; i++) {
//         const linha = document.createElement('div');
//         linha.classList.add('linha-tabuada'); 
//         linha.innerHTML = `
//             <strong>${numero}</strong> x <strong>${i}</strong> = <strong style="color: #764ba2;">${numero * i}</strong>
//         `;
//         divResultado.appendChild(linha);
//     }
// }


// // --- LÓGICA DO ALGORITMO ---
// function gerarAlgoritmo() {
//     const inputNumero1 = document.getElementById('numeroa1');
//     const inputNumero2 = document.getElementById('numeroa2');
//     const divResultado = document.getElementById('resultadosoma');
//     const divProduto = document.getElementById('resultadoproduto');
//     const divMaior = document.getElementById('resultadomaior');
//     const divMenor = document.getElementById('resultadomenor');
//     const numero1 = Number(inputNumero1.value);
//     const numero2 = Number(inputNumero2.value);

//     if (inputNumero1.value === '' || inputNumero2.value === '') {
//         divResultado.innerHTML = '<p style="color: red;">Digite dois números!</p>';
//         divProduto.innerHTML = '';
//         divMaior.innerHTML = '';
//         divMenor.innerHTML = '';
//         return;
//     }

//     const soma = numero1 + numero2;
//     const produto = numero1 * numero2;
//     const maior = Math.max(numero1, numero2);
//     const menor = Math.min(numero1, numero2);

//     divResultado.innerHTML = `<h3>Soma</h3><p>${numero1} + ${numero2} = ${soma}</p>`;
//     divProduto.innerHTML = `<h3>Produto</h3><p>${numero1} × ${numero2} = ${produto}</p>`;
//     divMaior.innerHTML = `<h3>Maior número</h3><p>${maior}</p>`;
//     divMenor.innerHTML = `<h3>Menor número</h3><p>${