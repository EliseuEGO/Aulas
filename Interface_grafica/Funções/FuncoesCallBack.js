const alunos = ["Eliseu", "rebeca", "Carlos"]
function imprimirAluno(nome, indice){
    console.log(`${indice+1}.${nome}`)
}
alunos.forEach(imprimirAluno)
alunos.forEach(function (alunos){
    console.log(alunos)
});
alunos.forEach((alunos) => console.log(alunos)
);