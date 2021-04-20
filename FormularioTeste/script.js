const nome = document.querySelectorAll("input")
const btn = document.querySelector('#submit')

function getElementsValue(){
    for(const element of nome){
        if(element.type != 'button'){
            console.log(element.value);
        }
    }
}

function preventDefault(event){
    //pegar elementos do formulário 
    getElementsValue()
    //mensagem de enviou
    console.log('Enviar Formulário');
    event.preventDefault()
}

btn.addEventListener('click', preventDefault);


