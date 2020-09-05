class Vida {
 constructor(vidamax, vidain) {
   this.total = vidamax;
   this.inicial = vidain;
   this.vidas = this.inicial;
   this.largura = 35;
   this.altura = 35;
   this.xInicial = 20;
   this.y = 20;
 }
  
  draw() {
    for(let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posição = this.xInicial * (1 + i);
    image(imagemVida, posição + margem, this.y, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.total) {
      this.vidas++
    }
  }
  
  perdeVida() {
    this.vidas--
  }
}