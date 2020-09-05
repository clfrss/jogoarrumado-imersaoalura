class Telainicial {
  constructor() {
  
  }
  
  draw(){
    this._imagemdefundo();
    this._texto();
    this._botao();
  }
  
  _imagemdefundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonte);
    textAlign(CENTER);
    textSize(50);
    fill('#FFFFF0');
    stroke(20);
    strokeWeight(5);
    text('Em busca do', width / 2, height / 3);
    textSize(95);
    text('Cristal Perdido', width / 2, height / 2);
  }
  
  _botao(){
    botão.y = height / 7 * 5;
    botão.draw();
  }
}