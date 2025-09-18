class Lanche {
    constructor() {
      this.pao = null;
      this.carne = null;
      this.queijo = null;
      this.salada = null;
      this.molho = null;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }

  class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(pao) {
        this.lanche.pao = pao;
        return this;
    }

    setCarne(carne) {
        this.lanche.carne = carne;
        return this;
    }

    setQueijo(queijo) {
        this.lanche.queijo = queijo;
        return this;
    }

    setSalada(salada) {
        this.lanche.salada = salada;
        return this;
    }

    setMolho(molho) {
        this.lanche.molho = molho;
        return this;
    }

    build() {
        return this.lanche;
    }
  }

  class LancheDirector {
    static buildLancheSimples() {
        return new LancheBuilder()
        .setPao('Brioche')
        .setCarne('Costela')
        .setQueijo('Prato')
        .setMolho('Chipotle')
        .build();
    }
    static buildLancheCompleto() {
        return new LancheBuilder()
        .setPao('Brioche')
        .setCarne('Costela')
        .setQueijo('Cheddar')
        .setSalada('Alface e tomate')
        .setMolho('Chipotle e Maionese')
        .build();
    }
  }
  
  const lancheSimples = LancheDirector.buildLancheSimples();
  const lancheCompleto = LancheDirector.buildLancheCompleto();
  
  lancheSimples.show();
  lancheCompleto.show();
  