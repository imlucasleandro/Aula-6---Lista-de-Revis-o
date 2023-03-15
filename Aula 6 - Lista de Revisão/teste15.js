function calculaFolhaPagamento(valorHora, horasTrabalhadas) {
    const salarioBruto = valorHora * horasTrabalhadas;
    let descontoIr = 0;
    
    if (salarioBruto > 900 && salarioBruto <= 1500) {
      descontoIr = salarioBruto * 0.05;
    } else if (salarioBruto > 1500 && salarioBruto <= 2500) {
      descontoIr = salarioBruto * 0.1;
    }
    
    const descontoSindicato = salarioBruto * 0.03;
    const fgts = salarioBruto * 0.11;
    const descontosTotal = descontoIr + descontoSindicato;
    const salarioLiquido = salarioBruto - descontosTotal;
    
    const output = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n` +
                   `Desconto Imposto de Renda: R$ ${descontoIr.toFixed(2)}\n` +
                   `Desconto Sindicato: R$ ${descontoSindicato.toFixed(2)}\n` +
                   `FGTS: R$ ${fgts.toFixed(2)}\n` +
                   `Total de descontos: R$ ${descontosTotal.toFixed(2)}\n` +
                   `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;
    
    return output;
  }

  const resultado = calculaFolhaPagamento(50, 180);
console.log(resultado);
