function colocarTodasPalavrasEmMaiusculo(paraMaiusculo){
	let promise = new Promise((resolve,reject)=>{	
		let paraMaiuscula = paraMaiusculo.map((palavra)=>{		
			if(typeof(palavra)!='string'){
				reject('erro');
			}	
			return palavra.toUpperCase();
		});

		resolve(paraMaiuscula);
	});

	return promise;
}

function ordenarPalavras(paraOrdenar){
	return new Promise((resolve,reject)=>{
		paraOrdenar.forEach((elemento,index)=>{
			if(typeof(elemento)!='string'){
				reject('erro');
			}			
		});

		const palavrasOrdenadas = paraOrdenar.sort((palavra,proxPalavra)=>{
			return palavra.localeCompare(proxPalavra);

		});
		resolve(palavrasOrdenadas);	
	});
}

const teste = ['Eliseu','Carlos','Roberta','Britney','Amanda'];

colocarTodasPalavrasEmMaiusculo(teste).then((pMaiuscula)=>{
		ordenarPalavras(pMaiuscula).then((pOrdenadas)=>{
				console.log(`palavras ordenadas e em maiusculas: ${pOrdenadas.join(', ')}.`);
			})
			.catch((erro)=>{
				console.log("erro de ordenação");
			})
	})
	.catch((erro)=>{
		console.log("erro ao transformar em maiuscula")
	})