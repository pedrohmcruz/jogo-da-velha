let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let vezDoJogador = 0;
let fimDeJogo = false;
let tipoDeSimbolo = ["o", "x"];

let estadosDeVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function vezJogador(posicao) {
  if(tabuleiro[posicao] === "") {
    tabuleiro[posicao] = tipoDeSimbolo[vezDoJogador];

    fimDeJogo = ganhouOJogo();

    if(fimDeJogo === false) {
      if(vezDoJogador === 0) {
        vezDoJogador = 1;
      } else {
        vezDoJogador = 0;
      }
    }
  }

  return fimDeJogo;
}

function ganhouOJogo() {
  for(let i = 0; i < estadosDeVitoria.length; i++) {
    let sequencia = estadosDeVitoria[i];
    let posicao1 = sequencia[0];
    let posicao2 = sequencia[1];
    let posicao3 = sequencia[2];

    if(tabuleiro[posicao1] === tabuleiro[posicao2] && 
      tabuleiro[posicao1] === tabuleiro[posicao3] &&
      tabuleiro[posicao1] != "") {
        return true
      }
  }
  
  return false
}

function checarEmpate() {
  return []
}