class Botão {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botão = createButton(this.texto);
    this.botão.mousePressed( () => this._alteracena());
    this.botão.addClass('botão-tela-inicial');
  }
  
  draw() {
    this.botão.position(this.x, this.y);
    this.botão.center('horizontal');
  }
  
  _alteracena() {
     this.botão.remove();
      cenaAtual = 'jogo';
  }
  
}