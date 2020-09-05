class Personagem extends Animação {
  constructor(matriz, imagem, x, variaçãoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variaçãoY, largura, altura, larguraSprite, alturaSprite);
    this.variaçãoY = variaçãoY;
    this.yInicial = height - this.altura - this.variaçãoY;
    this.y = this.yInicial;
    
    this.velocidadedopulo = 0;
    this.gravidade = 4;
    this.alturadopulo = -40;
    this.pulos = 0;
    this.invencivel = false;
  }
  pula() {
    if(this.pulos < 2); {
    this.velocidadedopulo = this.alturadopulo;
    this.pulos++
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadedopulo;
    this.velocidadedopulo = this.velocidadedopulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
       }
  }
  
  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estacolidindo(inimigo) {
    if(this.invencivel) {
     return false;
    }
    const precisão = .7;
    const colisão = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisão, 
      this.altura * precisão, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisão, 
      inimigo.altura * precisão);
    
    return colisão;
  }
}
