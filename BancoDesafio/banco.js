function UsuarioConta(nome, conta, saldo){
    this.nome = nome;
    this.conta = conta;
    this.saldo = saldo;

    //saque usuario
    this.saque = (total) => {
        this.saldo -= total;
    }
    //adicionar dinheiro
    this.deposito = (total) => {
        this.saldo += total;
    }
}

function statusConta(objectBanco){
    if(objectBanco.saldo === 0)
        return `Saldo: ${objectBanco.saldo}`;
    else
        return objectBanco.saldo > 0 ? `Saldo Positivo: ${objectBanco.saldo}`:`Saldo Negativo: ${objectBanco.saldo}`;
    
}

function addDinheiro(objectBanco, deposito){
    objectBanco.deposito(deposito);
}

function retiraDinheiro(objectBanco, totalSaque){
    objectBanco.saque(totalSaque);
}

//mostra no html
function UsuarioMostra( {nome, conta, saldo} ){
    document.write(`<p>Usuario:<strong>${nome}</strong> Conta: <strong>${conta}</strong></p><p> Saldo: <strong>${saldo}</strong></p>`);
}

const input = document.querySelectorAll('input');
const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click', () =>{
    const nome = input[0].value;
    const conta = parseFloat(input[1].value);
    const dinheiro = parseInt(input[2].value );
   
    const usuario = new UsuarioConta(nome, conta, dinheiro)
    UsuarioMostra(usuario)
})
    
    



/*
const usuario = new UsuarioConta("allyson", 2021, 1000.00);
addDinheiro(usuario, 5000.00)
retiraDinheiro(usuario, 2500.89)
console.log()
UsuarioMostra(usuario)
*/