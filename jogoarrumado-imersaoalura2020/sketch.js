function setup() {
  createCanvas(windowWidth, windowHeight);
  telaInicial = new Telainicial();
  jogo = new Jogo();
  cenas = {
    telaInicial,
    jogo
  }
  jogo.setup();
  botão = new Botão('Iniciar', width / 2, height / 2);
  
  frameRate(40)
  somjogo.loop();
}

function keyPressed() {
    jogo.keyPressed(key);
}

function draw() {
   cenas[cenaAtual].draw();
}