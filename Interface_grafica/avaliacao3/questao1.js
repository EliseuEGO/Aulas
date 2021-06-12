function map(arrayFunc,array) {
    let arrayReduce = array.reduce((arrayNovo,elemento)=>{
		let elementoGerado = arrayFunc(elemento);		
		arrayNovo.push(elementoGerado);
		return arrayNovo;
	},[]);

	return arrayReduce;
}
function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    const arrayTriplicado = map((num) => num * 3, array);
    if ((arrayTriplicado.toString())==[3, 6, 9, 12, 15]) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}
executaTeste();