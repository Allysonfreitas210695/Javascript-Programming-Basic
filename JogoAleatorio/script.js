

const button = document.querySelector('button')

button.onclick = () =>{
    const computador = Number(Math.random() * 10).toFixed(0)
    const numero = Number(document.querySelector('input').value)
    const resultado = document.querySelector('p')
    let text = ''

    if(numero > computador){
       text = `Sue numero ${numero} é maior que a do computador ${computador} `
    }else if(numero < computador){
        text = `Sue numero ${numero} é menor que a do computador ${computador}`
    }else{
        text = `Sue numero ${numero} é Igual que a do computador ${computador} <strong>PARABENS!</strong>`
    }
    
    resultado.innerHTML = text
    
    
}



