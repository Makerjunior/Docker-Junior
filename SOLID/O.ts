interface CartaoCredito {
    numero: string;
    nomeTitular: string;
    dataValidade: string;
    codigoSeguranca: string;
    validarNumero(): boolean;
    validarDataValidade(): boolean;
    validarCodigoSeguranca(): boolean;
  }
  
  class CartaoCreditoImpl implements CartaoCredito {
    constructor(
      public numero: string,
      public nomeTitular: string,
      public dataValidade: string,
      public codigoSeguranca: string
    ) {}
  
    validarNumero(): boolean {
      // Implemente a validação do número do cartão
      // Exemplo simples: Verifica se o número tem 16 dígitos
      return this.numero.length === 16 && /^\d+$/.test(this.numero);
    }
  
    validarDataValidade(): boolean {
      // Implemente a validação da data de validade
      // Exemplo simples: Verifica se a data está no formato MM/AA e se está no futuro
      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!regex.test(this.dataValidade)) return false;
  
      const [mes, ano] = this.dataValidade.split('/');
      const dataValidade = new Date(Number('20' + ano), Number(mes) - 1);
      const dataAtual = new Date();
      return dataValidade > dataAtual;
    }
  
    validarCodigoSeguranca(): boolean {
      // Implemente a validação do código de segurança
      // Exemplo simples: Verifica se o código tem 3 dígitos
      return /^\d{3}$/.test(this.codigoSeguranca);
    }
  
    // Método para validar o cartão como um todo
    validarCartao(): boolean {
      return this.validarNumero() && this.validarDataValidade() && this.validarCodigoSeguranca();
    }
  }
  
  class ValidadorCompra {
    static realizarCompra(cartao: CartaoCreditoImpl, valor: number): boolean {
      if (cartao.validarCartao()) {
        // Lógica para realizar a compra
        console.log(`Compra realizada com sucesso no valor de ${valor} usando o cartão ${cartao.numero}`);
        return true;
      } else {
        console.log("Erro: Cartão de crédito inválido");
        return false;
      }
    }
  }
  
  // Exemplo de uso:
  const meuCartao = new CartaoCreditoImpl(
    "1234567890123456",
    "Fulano de Tal",
    "12/25",
    "123"
  );
  
  const valorCompra: number = 100.50;
  
  ValidadorCompra.realizarCompra(meuCartao, valorCompra);
  