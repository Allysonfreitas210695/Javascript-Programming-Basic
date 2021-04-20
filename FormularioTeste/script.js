const nome = document.querySelectorAll("input")
const vet = []

nome[3].addEventListener("click", () =>{
    vet.push(nome[0].value)
    vet.push(nome[1].value)
    vet.push(nome[2].value)
    let texto = document.querySelector('#texto').value
    vet.push(texto)

    vet.forEach((element) => {
        console.log(element);
    })
})


