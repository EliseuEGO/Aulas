function calcularQuadrados() {
    var numeros = document.getElementById("txtNumeros").value;
    numeros = numeros.split(",");
    for (i = 0; i < numeros.length; i++) {
      quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
      document.write("O quadrado de " + numeros[i] + " é " + quadrado + "<br>");
    }
  }
function helloWorld(){
    document.write("hello World");
}
function organizaNumeros(){
    var numeros = document.getElementById("numerosParaOrganizar").value;
    numeros = numeros.split(",");
    var aux;
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < numeros.length-1; j++) {
            if(numeros[j]>numeros[j+1]){
                aux = numeros[j];
                numeros[j]=numeros[j+1];
                numeros[j+1]=aux;
            }
        }
    }
    document.write("Os numeros na ordem correta são: ");
    for(var i=0;i<numeros.length;i++){
        document.write(numeros[i]+" ");
    }
}
function calcFatorial(){
    var numeros = document.getElementById("numerosParaFatorial").value;
    numeros = numeros.split(",");
    for (var i = 0; i<numeros.length; i++){
        fat = 1;
        for(var j= 1; j<=numeros[i]; j++){
            fat *= j;
        }
        document.write("O fatorial de " + numeros[i] + " é " + fat + "<br>");
    }
}
function mediaAritimetica(){
    var numeros = document.getElementById("numerosParaMedia").value;
    numeros = numeros.split(",");
    var soma = 0;
    var positivos = 0, negativos = 0;
    for(var i=0; i < numeros.length; i++){
        soma += parseInt(numeros[i]);
        if (numeros[i]>0) {
            positivos++;
        } else if (numeros[i]<0){
            negativos++;
        }
    }
    soma /= numeros.length;
    document.write("A media aritimetica é " + soma + "<br>");
    document.write("O numero de positivos é " + positivos + " e negativos é " + negativos + "<br>");
    document.write(parseInt(((positivos/numeros.length)*100)) + "% positivos <br>"+ parseInt(((negativos/numeros.length)*100))+ "% negativos");

}
function numImpar(){
    var numeros = document.getElementById("numerosImpares").value;
    numeros = numeros.split(",");
    var soma=0;
    for(var i =0 ; i< numeros.length; i++){
        if((numeros[i]%2)>0){
            if((numeros[i]%3)==0){
                soma += parseInt(numeros[i]);
            }
        }
    }
    document.write("A soma dos numeros inteiros impares multiplos de 3 é " + soma);
}
function inverte(){
    var numeros = document.getElementById("numerosParaInverter").value;
    numeros = numeros.split(",");
    numeros.reverse();
    
    for(var i=0;i<numeros.length;i++){
        if(i+1==numeros.length){
            document.write(numeros[i]+" ");
        }else{
            document.write(numeros[i]+", ");
        }
    }

}