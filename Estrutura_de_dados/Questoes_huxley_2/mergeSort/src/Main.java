import java.util.Scanner;


class Main {
  private static void intercala(int[] vetor, int comeco, int meio, int fim) {
    int novoVetor[] = new int[fim - comeco];
    int i = comeco;
    int m = meio;
    int pos = 0;
    
    while(i < meio && m < fim) {
      if(vetor[i] <= vetor[m]) {
        novoVetor[pos] = vetor[i];
        pos = pos + 1;
        i = i + 1;
      } else {
        novoVetor[pos] = vetor[m];
        pos = pos + 1;
        m = m + 1;
      }
    }
    
    while(i < meio) {
      novoVetor[pos] = vetor[i];
      pos = pos + 1;
      i = i + 1;
    }
    
    while(m < fim) {
      novoVetor[pos] = vetor[m];
      pos = pos + 1;
      m = m + 1;
    }
    
    for(pos = 0, i = comeco; i < fim; i++, pos++) {
      vetor[i] = novoVetor[pos];
    }
  }

  private static void ordenacao(int tamanho, int[] vetor) {
    int elementos = 1;
    int comeco, meio, fim;
    while(elementos < tamanho) {
      comeco = 0;
      while(comeco + elementos < tamanho) {
        meio = comeco + elementos;
        fim = comeco + 2 * elementos;
        if(fim > tamanho)
          fim = tamanho;
        intercala(vetor, comeco, meio, fim);
        comeco = fim;
      }
      elementos = elementos * 2;
    }
  }
  
  public static void main(String[] args) {
    Scanner entrada = new Scanner (System.in);
    String Snumeros[];
   
    int numeros[], N;

    N = entrada.nextInt();
     
    for(int i=0; i<N; i++){
        if (entrada.hasNextLine()) {
            entrada.nextLine();
        }
        
        String Snumero = entrada.nextLine();

        Snumeros = Snumero.split(" ");

        numeros = new int[Snumeros.length];
        for(int j=0; j<Snumeros.length;j++){
          numeros[j]= Integer.parseInt(Snumeros[j]);
        }
        ordenacao(numeros.length, numeros);
        for(int k: numeros){
          System.out.print(k + " ");
        }
    }
    
    /**/
    /*ordenacao(numeros.length, numeros);
    for(int i : numeros) {
      System.out.print(i + " ");
    }*/


    entrada.close();
  }
  
}