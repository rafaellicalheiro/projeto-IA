// script.js
const perguntas = [
    {
        pergunta: "Os robôs avançam pelo norte. Você deseja organizar uma emboscada ou recuar?",
        alternativas: ["Organizar emboscada", "Recuar para a base sul"],
        finais: [null, null]
    },
    {
        pergunta: "A emboscada teve sucesso parcial. Agora, atacar a torre de comando inimiga ou fortalecer defesas?",
        alternativas: ["Atacar a torre", "Fortalecer defesas"],
        finais: [null, null]
    },
    {
        pergunta: "Os robôs ativaram um vírus digital. Você desativa os servidores ou tenta isolar o vírus?",
        alternativas: ["Desativar servidores", "Isolar o vírus"],
        finais: [
            "Você salvou parte da rede, mas perdeu comunicação com aliados. A guerra continua...",
            "Você isolou o vírus com sucesso. As tropas humanas ganham vantagem e vencem a batalha final!"
        ]
    }
];

let indicePergunta = 0;
const perguntaEl = document.querySelector('.caixa-perguntas');
const alternativasEl = document.querySelector('.caixa-alternativas');
const resultadoEl = document.querySelector('.texto-resultado');
const caixaPrincipal = document.querySelector('.caixa-principal');

function mostrarPergunta() {
    caixaPrincipal.classList.remove("fade");
    setTimeout(() => caixaPrincipal.classList.add("fade"), 50);
    
    const atual = perguntas[indicePergunta];
    perguntaEl.textContent = atual.pergunta;
    alternativasEl.innerHTML = '';

    atual.alternativas.forEach((texto, i) => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.onclick = () => escolherAlternativa(i);
        alternativasEl.appendChild(btn);
    });
}

function escolherAlternativa(i) {
    const atual = perguntas[indicePergunta];
    if (atual.finais[i]) {
        mostrarResultado(atual.finais[i]);
    } else {
        indicePergunta++;
        if (indicePergunta < perguntas.length) {
            mostrarPergunta();
        }
    }
}

function mostrarResultado(texto) {
    perguntaEl.innerHTML = '';
    alternativasEl.innerHTML = '';
    resultadoEl.textContent = texto;

    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = "Recomeçar";
    btnReiniciar.onclick = () => location.reload();
    alternativasEl.appendChild(btnReiniciar);
}

document.addEventListener("DOMContentLoaded", () => {
    caixaPrincipal.classList.add("show");
    mostrarPergunta();
});
