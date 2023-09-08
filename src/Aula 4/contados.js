class ContadorPessoas {
  constructor() {
      this.homens = 0;
      this.mulheres = 0;
  }

  // Método para incrementar o contador de homens
  incrementarHomens() {
      this.homens++;
      if (this.homens < 0) {
          this.homens = 0;
      }
      document.getElementById('homens').textContent = this.homens;
      this.atualizarTotal();
  }

  // Método para decrementar o contador de homens
  decrementarHomens() {
      this.homens--;
      if (this.homens < 0) {
          this.homens = 0;
      }
      document.getElementById('homens').textContent = this.homens;
      this.atualizarTotal();
  }

  // Método para incrementar o contador de mulheres
  incrementarMulheres() {
      this.mulheres++;
      if (this.mulheres < 0) {
          this.mulheres = 0;
      }
      document.getElementById('mulheres').textContent = this.mulheres;
      this.atualizarTotal();
  }

  // Método para decrementar o contador de mulheres
  decrementarMulheres() {
      this.mulheres--;
      if (this.mulheres < 0) {
          this.mulheres = 0;
      }
      document.getElementById('mulheres').textContent = this.mulheres;
      this.atualizarTotal();
  }

  // Método para atualizar o contador total
  atualizarTotal() {
      const total = this.homens + this.mulheres;
      document.getElementById('total').textContent = total;
  }
}

const contador = new ContadorPessoas();

// Associar eventos aos botões
document.getElementById('plusH').addEventListener('click', () => {
  contador.incrementarHomens();
});

document.getElementById('minusH').addEventListener('click', () => {
  contador.decrementarHomens();
});

document.getElementById('plusM').addEventListener('click', () => {
  contador.incrementarMulheres();
});

document.getElementById('minusM').addEventListener('click', () => {
  contador.decrementarMulheres();
});