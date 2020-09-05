function preload(){ 
  imagemCenário = loadImage('Assets/background.png');
  imagemgameover = loadImage('Assets/game-over.png');
  imagemPersonagem = loadImage('Assets/correndo.png');
  imagemInimigo = loadImage('Assets/gotinha.png');
  imagemtroll = loadImage('Assets/troll.png');
  imagemvoador = loadImage('Assets/gotinha-voadora.png');
  imagemTelaInicial = loadImage('Assets/floresta.png');
  fonte = loadFont('Assets/fonteTelaInicial.otf');
  somjogo = loadSound('Assets/trilha_jogo.mp3');
  sompulo = loadSound('Assets/somPulo.mp3');
  imagemVida = loadImage('Assets/vida.png');
  fita = loadJSON('FITA/fita.json');
}