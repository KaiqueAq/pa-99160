// ── NAVEGAÇÃO ──
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const pages = document.querySelectorAll('.page');

    // Troca de abas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-page');
            
            tabs.forEach(t => t.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});

// ── EXERCÍCIO 1 ──
function calcEx1() {
    const a = parseFloat(document.getElementById('ex1n1').value);
    const b = parseFloat(document.getElementById('ex1n2').value);

    if (isNaN(a) || isNaN(b)) { alert('Preencha os dois campos!'); return; }

    const fmt = n => Number.isInteger(n) ? n : n.toFixed(2);
    document.getElementById('ex1med').textContent = fmt((a + b) / 2);
    document.getElementById('ex1soma').textContent = fmt(a + b);
    document.getElementById('ex1prod').textContent = fmt(a * b);
    document.getElementById('ex1maior').textContent = fmt(Math.max(a, b));
    document.getElementById('ex1menor').textContent = fmt(Math.min(a, b));
    document.getElementById('ex1result').classList.remove('hidden');
}

// ── EXERCÍCIO 2 ──
function calcEx2() {
    const n1 = parseFloat(document.getElementById('ex2n1').value);
    const n2 = parseFloat(document.getElementById('ex2n2').value);
    const n3 = parseFloat(document.getElementById('ex2n3').value);

    if ([n1, n2, n3].some(isNaN)) { alert('Preencha as três notas!'); return; }

    const media = (n1 + n2 + n3) / 3;
    const aprovado = media >= 7;
    const elSit = document.getElementById('ex2sit');

    document.getElementById('ex2med').textContent = media.toFixed(2);
    elSit.textContent = aprovado ? '✓ Aprovado' : '✗ Reprovado';
    elSit.className = 'rvalue ' + (aprovado ? 'success' : 'danger');
    document.getElementById('ex2result').classList.remove('hidden');
}

// ── EXERCÍCIO 3 ──
function calcEx3() {
    const idade = parseInt(document.getElementById('ex3idade').value);
    if (isNaN(idade) || idade < 0) { alert('Informe uma idade válida!'); return; }

    let situacao, cls;
    if (idade < 16) { situacao = '🚫 Não pode votar'; cls = 'danger'; }
    else if (idade < 18 || idade > 65) { situacao = '📝 Voto opcional'; cls = 'warn'; }
    else { situacao = '✅ Voto obrigatório'; cls = 'success'; }

    const elSit = document.getElementById('ex3sit');
    elSit.textContent = situacao;
    elSit.className = 'rvalue ' + cls;
    document.getElementById('ex3result').classList.remove('hidden');
} // <-- CORREÇÃO: Chave que faltava aqui!

// ── EXERCÍCIO 4 ──
function calcEx4() {
    const codigo = document.getElementById('ex4cod').value.trim();
    const nasc = parseInt(document.getElementById('ex4nasc').value);
    const trab = parseFloat(document.getElementById('ex4trab').value);
    const anoAtual = new Date().getFullYear();

    if (!codigo || isNaN(nasc) || isNaN(trab)) { alert('Preencha todos os campos!'); return; }

    const idade = anoAtual - nasc;
    const elegivel = idade >= 65 || trab >= 30;

    document.getElementById('ex4rcod').textContent = codigo;
    document.getElementById('ex4ridade').textContent = idade + ' anos';
    document.getElementById('ex4rtrab').textContent = trab + ' anos';
    
    const status = document.getElementById('ex4rstatus');
    status.textContent = elegivel ? '✅ Requerer' : '❌ Não Requerer';
    status.className = 'rvalue ' + (elegivel ? 'success' : 'danger');
    
    document.getElementById('ex4result').classList.remove('hidden');
}

// ── EXERCÍCIO 5 ──
function calcEx5() {
    const qtd = parseInt(document.getElementById('ex5qtd').value);
    if (isNaN(qtd) || qtd < 1) { alert('Informe a quantidade!'); return; }

    const preco = qtd < 12 ? 1.30 : 1.00;
    const total = qtd * preco;
    const fmtBR = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('ex5rqtd').textContent = qtd + ' un';
    document.getElementById('ex5rpreco').textContent = fmtBR(preco);
    document.getElementById('ex5rtotal').textContent = fmtBR(total);
    document.getElementById('ex5result').classList.remove('hidden');
}

// ── EXERCÍCIO 6 ──
function calcEx6() {
    const resultBox = document.getElementById('ex6result');
    const errorBox = document.getElementById('ex6error');
    resultBox.classList.add('hidden');
    errorBox.classList.add('hidden');

    const notas = [
        parseFloat(document.getElementById('ex6n1').value),
        parseFloat(document.getElementById('ex6n2').value),
        parseFloat(document.getElementById('ex6n3').value)
    ];

    for (let n of notas) {
        if (isNaN(n) || n < 0 || n > 10) {
            errorBox.textContent = "⚠ Insira notas válidas entre 0 e 10.";
            errorBox.classList.remove('hidden');
            return;
        }
    }

    const media = notas.reduce((a, b) => a + b) / 3;
    let sit, cls;
    if (media >= 7) { sit = '✓ Aprovado'; cls = 'success'; }
    else if (media >= 5) { sit = '⚠ Recuperação'; cls = 'warn'; }
    else { sit = '✗ Reprovado'; cls = 'danger'; }

    document.getElementById('ex6med').textContent = media.toFixed(2);
    const elSit = document.getElementById('ex6sit');
    elSit.textContent = sit;
    elSit.className = 'rvalue ' + cls;
    resultBox.classList.remove('hidden');
}