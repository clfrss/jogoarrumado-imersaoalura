class Animação {
  constructor(matriz, imagem, x, variaçãoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variaçãoY = variaçãoY //serve para variar o eixo y
    this.y = height - this.altura - this.variaçãoY
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }
  
  exibe(){
   image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.anima()
  }
  
  anima(){
    this.frameAtual++
    
    if(this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0 
    }
  }
}