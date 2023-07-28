import java.sql.SQLOutput;

public class Aula {

    public static void main(String[] args) {
        System.out.println("hello, world");
        System.out.print("oi");
        System.out.print("!!!");
        System.out.println("oi");
        System.out.println("!!!");
        System.err.println("erro");

        int n1 = 16;
        int n2 = 9;
        int soma = n1 + n2;

        System.out.printf("A soma de %d e %d é igual %d", n1, n2, soma);

        String nome = "gabriel";
        System.out.printf("bem vindo, %s!\n", nome);

        double nu1 = 3.4;
        double nu2 = 12.5;
        double div = nu2 / nu1;
        System.out.printf("A divisão de %.2f e %2f é igual  a %3f.\n,", n1, n2, div);


    }
}
