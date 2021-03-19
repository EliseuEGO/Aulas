/*
Se o primeiro número lido for ímpar a ordem será crescente.
Caso contrário será decrescente.
No entanto, se qualquer um dos valores for negativo, será exibida uma mensagem de erro.
*/
import java.util.Scanner;
public class OrdenacaoDaRita{
    public static void main(String[] args) {
        int[] numeros = new int[3];
        int aux;
        Scanner entrada = new Scanner(System.in);
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = entrada.nextInt();
        }
        if (numeros[0]<0||numeros[1]<0||numeros[2]<0) {
            System.out.println("Ordenacao cancelada");
        } else if ((numeros[0]%2)==0) {
            for (int i = 0; i < numeros.length; i++) {
                for (int j = 0; j < numeros.length-1; j++) {
                    if (numeros[j]<numeros[j+1]) {
                        aux = numeros[j];
                        numeros[j]=numeros[j+1];
                        numeros[j+1] = aux;
                    }
                }
            }
            for (int i = 0; i < numeros.length; i++) {
                System.out.println(numeros[i]);
            }
        } else {
            for (int i = 0; i < numeros.length; i++) {
                for (int j = 0; j < numeros.length-1; j++) {
                    if (numeros[j]>numeros[j+1]) {
                        aux = numeros[j];
                        numeros[j]=numeros[j+1];
                        numeros[j+1] = aux;
                    }
                }
            }
            
            for (int i = 0; i < numeros.length; i++) {
                System.out.println(numeros[i]);
            }
        }
        

        entrada.close();
    }
}