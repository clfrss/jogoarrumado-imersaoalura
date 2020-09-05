class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenário, 3);
    pontuação = new Pontuação();
    vida = new Vida(fita.configurações.vidaMaxima, fita.configurações.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 38, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 38, 52, 52, 104, 104, 10);
    const inimigotroll = new Inimigo(matriztroll, imagemtroll, width * 2, 16, 200, 200, 400, 400, 15);
    const inimigovoador = new Inimigo(matrizvoador, imagemvoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigotroll);
    inimigos.push(inimigovoador);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      personagem.pula()
      sompulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();
    pontuação.exibe();
    pontuação.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estacolidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
      if (vida.vidas === 0) {
        image(imagemgameover, width / 2 - 150, height / 3);
        noLoop();
      }
    }
  }
}