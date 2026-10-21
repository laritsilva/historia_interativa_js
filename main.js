const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "A cidade investiu em educação, melhorando as escolas e ampliando as oportunidades para os estudantes."
      },
      {
        texto: "Saúde.",
        afirmacao: "A cidade priorizou a saúde, melhorando o atendimento e o acesso aos serviços médicos."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "A cidade investiu em infraestrutura, melhorando o abastecimento de água para a população."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "A cidade promoveu campanhas de conscientização, incentivando a população a economizar água."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "A cidade aumentou a coleta de lixo, deixando as ruas mais limpas e melhorando a qualidade de vida."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "A cidade investiu em reciclagem, reduzindo a quantidade de resíduos descartados no meio ambiente."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: "A cidade melhorou o transporte público, incentivando seu uso e reduzindo o número de veículos nas ruas."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "A cidade construiu novas vias, facilitando o deslocamento, mas aumentando os custos de infraestrutura."
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: "Após quatro anos, a cidade se tornou mais sustentável, com avanços na preservação ambiental e na qualidade de vida."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Após quatro anos, a cidade cresceu economicamente, mas ainda precisa investir em soluções para os problemas ambientais."
      }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}


mostraPergunta();