class Inimigo extends Animação {
  constructor(matriz, imagem, x, variaçãoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
  super(matriz, imagem, x, variaçãoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade;
    this.x = width
  }
  
  move(){
  this.x = this.x - this.velocidade;
  }
  
  aparece(){
    this.x = width
  }
}