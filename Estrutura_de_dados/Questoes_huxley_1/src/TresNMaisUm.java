import java.util.Scanner;
public class TresNMaisUm {
  public static void main(String[] args) {
    
  
    Scanner entrada = new Scanner(System.in);

    String numeros[], numero;//Strings para capturar os numeros 
    int num1, num2;//i j
    int numA = 0;//numero do algoritmo
    int cicloMaior = 0, aux;
    
    
    

    while(entrada.hasNext()){//enquanto tiver entradas
      boolean trocou = false;
      numero = entrada.nextLine();
      numeros = numero.split(" ");// separa os numeros
      num1 = Integer.parseInt(numeros[0]);
      num2 = Integer.parseInt(numeros[1]);
      cicloMaior = aux = 0;

      if(num1>num2){
        aux = num1;
        num1 = num2;
        num2 = aux;
        trocou = true;
      }

      if(num1>0&&num1<1000000 && num2>0&&num2<1000000){
        for(int i = num1; i<=num2; i++){
          numA=i;
          int contadorDeCilos = 1;
          while(numA != 1){
            if(numA%2==0){ //se o numero for par
              numA = numA/2;
            }else{
              numA = (3*numA)+1;
            }
            contadorDeCilos++;
          }
          if(contadorDeCilos>cicloMaior){
            cicloMaior=contadorDeCilos;
          }
        }
        if(!trocou){
          System.out.printf("%d %d %d\n", num1, num2, cicloMaior);
        }else{
          System.out.printf("%d %d %d\n", num2, num1, cicloMaior);
        }
      }
    }


    entrada.close();
  }
}
