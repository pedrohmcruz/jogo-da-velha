document.addEventListener("DOMContentLoaded", () => {
  let pecas = document.querySelectorAll(".peca");
  pecas.forEach((peca) => {
    peca.addEventListener("click", clickPeca);
  })
})

function clickPeca(evento) {
  let peca = evento.target;
  let posicao = peca.id;
  let jogador = "";

  if(vezDoJogador === 0) {
    jogador = "O";
  } else {
    jogador = "X";
  }

  if(vezJogador(posicao)) {
    setTimeout(() => {
      alert(`Fim de jogo! O vencedor foi o jogador "${jogador}"`)
    }, 50);
  }

  atualizarPeca();
}

function atualizarPeca() {
  let pecas = document.querySelectorAll(".peca");
  pecas.forEach((peca) => {
    let posicao = peca.id;
    let simbolo = tabuleiro[posicao];

    if(simbolo != "") {
      peca.innerHTML = `<div class="simbolo-${simbolo}"></div>`
    }
  })
}

function resetarJogo() {
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  vezDoJogador = 0;
  fimDeJogo = false;
  let pecas = document.querySelectorAll(".peca");

  pecas.forEach((peca) => {
    peca.innerHTML = "";
  })
}

