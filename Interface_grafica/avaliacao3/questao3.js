function analisandoDatas(E , D) {
    if (E <= 0 || E >= 25 || D <=0 || D >= 25) {
        console.error('Datas inválidas')
        return false;
    } else {
        if (E>D) {
            console.log("Eu odeio o professor Florovsky")
            return false;
        } else if(E + 3 > D){
            console.log("O trabalho está muito ruim")

		D = D + 2;

            if(D<24){
                console.log("TCC Apresentado!")
            } else {
                console.log("Não deu! Só no próximo ano agora.")
                return false;
            } 
        } else{
            console.log("Muito bem! O aluno está apto a apresentar até o natal!");
        }
        return true;

    }
    
}
function executaTeste() {

    const E = [6,8,9,11,15,21];
    const D = [26,22,20,23,19,21];

    E.forEach((dataDeEntrega,index)=>{
        console.log(`\n`)
        console.log(`data de entrega: ${dataDeEntrega}\nfinal do prazo: ${D[index]}`)
        analisandoDatas(dataDeEntrega,D[index])
    })
}

executaTeste();