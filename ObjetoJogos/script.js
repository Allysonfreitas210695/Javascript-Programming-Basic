
const campeonato = {
    nome: "brasileiro",
    Qtd_times: 3,
    times:[
        {
            sp:[
                "vitoria", "empate", "vitoria"
            ],
            abc:[
                "empate", "vitoria", "perdeu"
            ],
            america:[
                "perdeu", "perdeu", "perdeu"
            ]
        }
    ]
}


function totalTimes(){
    const times = []

    for(const time of campeonato.times){
        for(const nome in time){
            if(times.indexOf(nome) == -1){
                times.push(nome)
            }
        }
    }
    return times
}

function Total_times(){
  console.log(campeonato.Qtd_times);
}

function Nome_campeonato(){
    console.log(campeonato.nome);
}

function vitorias(){
    let totalsp = 0
    let totalabc = 0
    let totalamerica = 0
    const v = [
        totalsp,
        totalabc,
        totalamerica
    ]

    for(const time of campeonato.times){
         for(let j = 0; j < 3; j++){
            if(time.sp[j].includes('vitoria')){
                v[0] += 1
            }
            if(time.abc[j].includes('vitoria')){
                v[1] += 1
            }
            if(time.america[j].includes('vitoria')){
                v[2] += 1
            }
       }
       
    }
    return v
}

function imprimir(){
    
    for(let i = 0; i < totalTimes().length; i++){
        console.log("time: "+ totalTimes()[i].toLocaleUpperCase() + " Total de vitorias: "+ vitorias()[i]);
    }
}

//console.log(imprimir());
////console.log(totalTimes());
//console.log(Total_times());
//console.log(Nome_campeonato());
console.log(vitorias());
