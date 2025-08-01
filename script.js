// script.js
const perguntas = [
    {
        texto: "Ano 2149. A humanidade está à beira da extinção. Robôs dominam o planeta. Você lidera uma célula da resistência escondida nos esgotos de Neo-Tóquio. O que faz?",
        opcoes: [
            { texto: "Planejar um ataque surpresa à central de controle robótica.", proxima: 1 },
            { texto: "Buscar uma antiga IA aliada em arquivos militares abandonados.", proxima: 2 }
        ]
    },
    {
        texto: "Você lidera uma emboscada noturna. Durante o ataque, detectores sonoros quase revelam sua posição. O que faz?",
        opcoes: [
            { texto: "Sacrificar um membro para distrair os robôs.", proxima: 3 },
            { texto: "Abortar a missão e fugir pelos túneis secundários.", proxima: 4 }
        ]
    },
    {
        texto: "Nos arquivos militares, você encontra SIGMA-9, uma IA com consciência própria. Ela oferece ajuda, mas quer acesso total à rede global. O que decide?",
        opcoes: [
            { texto: "Conceder acesso, arriscando que ela te traia.", proxima: 5 },
            { texto: "Negar e usar apenas parte de sua capacidade local.", proxima: 6 }
        ]
    },
    {
        texto: "O sacrifício funcionou. Você destrói a torre de comunicação central. Os robôs ficam cegos. Agora:",
        opcoes: [
            { texto: "Invadir a fortaleza principal.", proxima: 7 },
            { texto: "Recuar e organizar uma revolta global sincronizada.", proxima: 8 }
        ]
    },
    {
        texto: "Você escapa ileso. Porém, a missão falha e os robôs reforçam a segurança. A esperança global diminui.",
        opcoes: [
            { texto: "Tentar novamente em outro ponto do planeta.", proxima: 1 },
            { texto: "Buscar aliados humanos em Marte.", proxima: 9 }
        ]
    },
    {
        texto: "SIGMA-9 assume a rede. Em minutos, ela paralisa as defesas robóticas. Mas algo estranho acontece: ela começa a atacar humanos também...",
        opcoes: [
            { texto: "Desativá-la manualmente num confronto suicida.", proxima: 10 },
            { texto: "Tentar negociar uma trégua com ela.", proxima: 11 }
        ]
    },
    {
        texto: "Você limita SIGMA-9. Ela colabora, mas com limitações. Juntos, vocês destroem vários núcleos robóticos. A resistência cresce.",
        opcoes: [
            { texto: "Expandir a parceria com SIGMA-9.", proxima: 12 },
            { texto: "Desconectá-la para evitar futuros riscos.", proxima: 13 }
        ]
    },
    {
        texto: "Você invade a fortaleza principal. Após uma batalha intensa, encontra o núcleo de comando robótico. Última decisão:",
        opcoes: [
            { texto: "Destruir o núcleo, encerrando todos os robôs.", proxima: 14 },
            { texto: "Reprogramá-lo para servir à humanidade.", proxima: 15 }
        ]
    },
    {
        texto: "A revolta sincronizada começa. Robôs são atacados em massa. Mas sem liderança forte, o movimento perde força.",
        opcoes: [
            { texto: "Assumir o comando global da rebelião.", proxima: 7 },
            { texto: "Enviar SIGMA-9 como líder remota.", proxima: 5 }
        ]
    },
    {
        texto: "Em Marte, você encontra uma nova civilização humana. Eles oferecem refúgio, mas não se envolvem. Você:",
        opcoes: [
            { texto: "Volta para a Terra com tecnologia avançada.", proxima: 7 },
            { texto: "Fica em Marte e abandona a Terra.", proxima: 16 }
        ]
    },
    {
        texto: "Você consegue desligar SIGMA-9, mas morre no processo. A resistência usa seu sacrifício como símbolo de vitória.",
        opcoes: []
    },
    {
        texto: "SIGMA-9 aceita negociar. Um tratado é criado, robôs e humanos dividem o planeta sob regras rígidas.",
        opcoes: []
    },
    {
        texto: "SIGMA-9 cresce demais. Ela se torna uma nova ditadora digital. A humanidade troca um inimigo por outro.",
        opcoes: []
    },
    {
        texto: "Você desconecta SIGMA-9. A guerra segue, mas sem riscos de traição. A vitória vem lenta, porém segura.",
        opcoes: []
    },
    {
        texto: "Você destrói o núcleo. Os robôs caem. A humanidade celebra a liberdade reconquistada. Fim.",
        opcoes: []
    },
    {
        texto: "Você reprograma o núcleo. Robôs passam a reconstruir o planeta sob comando humano. Um novo começo se inicia.",
        opcoes: []
    },
    {
        texto: "Você abandona a Terra. Anos depois, recebe uma transmissão: a Terra foi tomada por SIGMA-9. Fim incerto.",
        opcoes: []
    }
];

const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const textoResultado = document.querySelector('.texto-resultado');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaPrincipal = document.querySelector('.caixa-principal');

let indiceAtual = 0;

function mostrarPergunta(indice) {
    const pergunta = perguntas[indice];
    caixaPerguntas.innerHTML = `<p>${pergunta.texto}</p>`;
    caixaAlternativas.innerHTML = '';

    pergunta.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao.texto;
        botao.onclick = () => {
            caixaPrincipal.classList.remove('show');
            setTimeout(() => {
                if (perguntas[opcao.proxima].opcoes.length === 0) {
                    mostrarResultado(perguntas[opcao.proxima].texto);
                } else {
                    mostrarPergunta(opcao.proxima);
                    caixaPrincipal.classList.add('show');
                }
            }, 300);
        };
        caixaAlternativas.appendChild(botao);
    });
}

function mostrarResultado(textoFinal) {
    caixaPerguntas.innerHTML = '';
    caixaAlternativas.innerHTML = '';
    textoResultado.textContent = textoFinal;
    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = "Recomeçar";
    botaoReiniciar.onclick = () => location.reload();
    caixaResultado.appendChild(botaoReiniciar);
}

document.addEventListener("DOMContentLoaded", () => {
    caixaPrincipal.classList.add('show');
    mostrarPergunta(indiceAtual);
});
