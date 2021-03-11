import java.util.Scanner;


    /*
-O programa é uma fila
-Primeiramente definir o numero de casos a ser testado
-Inserir o numero de alunos
-Inserir as notas dos alunos

*Criar dois arrays, o original permanece o msm e a cópia é reordenada
*



*/


class Fila {
  public static void main(String[] args) {
    Scanner entrada = new Scanner (System.in);
    
    int n, m, j=0;
    
    int[] p,p2;
    int aux, cont;
    n = entrada.nextInt();
    int[] numTrocas = new int[n];


    while(j<n){
      cont=0;
      m = entrada.nextInt();
      p = new int[m];
      p2 = new int[m];
      for(int i = 0; i < m; i++){
        p[i] = entrada.nextInt();
        p2[i] = p[i];
      }
      for(int i = 0; i<m;i++){
          for (int k = 0; k < m-1; k++) {
              if(p[k]<p[k+1]){
                aux = p[k];
                p[k] = p[k+1];
                p[k+1] = aux;
              }
          }
      }
      for (int i = 0; i < m; i++) {
          if(p[i]==p2[i]){
              cont++;
          }
      }

      numTrocas[j] = cont;
      j++;
    }

    for (int i = 0; i < numTrocas.length; i++) {
        System.out.println(numTrocas[i]);
    }
    entrada.close();
  }
}

