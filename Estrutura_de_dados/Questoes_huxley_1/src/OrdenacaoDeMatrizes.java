import java.util.Scanner;

/**
 * colher M e N 
 *  numero de linhas menor ou igual a 10 M<=10
 * numero de c
 */

public class OrdenacaoDeMatrizes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String numero, numeros[];
        int num1, num2;
        numero = entrada.nextLine();
        numeros = numero.split(" ");
        num1 = Integer.parseInt(numeros[0]);
        num2 = Integer.parseInt(numeros[1]);
    
        int dimensoes = num1 * num2;
        int preMatriz[] = new int[dimensoes];
        int matriz[][] = new int[num1][num2];
        int aux;
    
        for (int i = 0; i<dimensoes; i++){
          preMatriz[i]=entrada.nextInt();
        }
        for(int x=0; x<preMatriz.length; x++){
          for(int y=0; y<preMatriz.length-1; y++){
            if(preMatriz[y]>preMatriz[y+1]){
              aux = preMatriz[y];
              preMatriz[y] = preMatriz[y+1];
              preMatriz[y+1] = aux;
            }
          }
        }
      
        
          int cont=0;
          for(int i = 0;i<num1; i++){
            for(int j = 0; j<num2; j++){
              matriz[i][j] = preMatriz[cont++];
            }
          }
        
        for(int i = 0;i<num1; i++){
            for(int j = 0; j<num2; j++){
              if(j!=matriz[0].length-1){
                System.out.printf("%d ",matriz[i][j]);
              }else{
                 System.out.printf("%d",matriz[i][j]);
              }
            }
            System.out.println("");
          }
    
    
        entrada.close(); 
    }
}
