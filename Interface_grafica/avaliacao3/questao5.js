async function colocarTodasPalavrasEmMaiusculo(paraMaiusculo){
    let convertida = true;	
		const paraMaiuscula = await paraMaiusculo.map((palavra)=>{		
			if(typeof(palavra)!='string'){
				convertida = false;
                return;
			}	
			return palavra.toUpperCase();
		});
        if(!convertida){
            return false;
        }
        return paraMaiuscula;
		
}

async function ordenarPalavras(paraOrdenar){
    let ordenada = true;
	
		await paraOrdenar.forEach((elemento,index)=>{
			if(typeof(elemento)!='string'){
				ordenada = false;
			}			
		});
        if(!ordenada){
            return false;
        }


		const palavrasOrdenadas = paraOrdenar.sort((palavra,proxPalavra)=>{
			return palavra.localeCompare(proxPalavra);

		});
		return palavrasOrdenadas;	
	
}

async function executaTeste(palavras){
    let pMaiuscula = await colocarTodasPalavrasEmMaiusculo(palavras);
    if(!pMaiuscula){
        console.error('Erro para transformar em maiusculo')
    }

    let pOrdenadas = await ordenarPalavras(pMaiuscula);
    if(!pOrdenadas){
        return console.error('Erro para ordenar palavras')
    }

    console.log(`palavras ordenadas e em maiusculas: ${pOrdenadas.join(', ')}.`);
}

const teste = ['Eliseu','Carlos','Roberta','Britney','Amanda'];
executaTeste(teste);