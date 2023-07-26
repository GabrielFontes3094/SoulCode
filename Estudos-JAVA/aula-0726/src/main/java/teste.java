import java.util.Scanner;
public class teste {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite o seu nome: ");
        String nome = entrada.nextLine();

        System.out.println("Digite sua altura: ");
        double altura = entrada.nextDouble();

        System.out.println("Digite seu peso: ");
        double peso = entrada.nextDouble();

        double imc = peso / Math.pow(altura, 2);

        if(imc < 17) {
            System.out.println("Muito abaixo do peso.");
        } else if(imc >= 17 && imc < 18.5) {
            System.out.println("Abaixo do peso.");
        } else if(imc >= 18.5 && imc < 25) {
            System.out.println("Peso normal.");
        } else if(imc >= 25 && imc < 30) {
            System.out.println("Acima do peso.");
        } else if(imc >= 30 && imc < 35) {
            System.out.println("Obesidade I");
        } else if(imc >= 35 && imc < 40) {
            System.out.println("Obesidade II");
        } else {
            System.out.println("Obesidade III");
        }

        System.out.println("Selecione uma dieta (1 a 3)");
        System.out.println("1 - agua");
        System.out.println("2 - fruta");
        System.out.println("3 - batata");

        int opcao = entrada.nextInt();

        switch (opcao){
            case 1:
                System.out.println("Você escolheu a dieta da agua");;
                break;
            case 2:
                System.out.println("Voê escolheu a dieta da fruta");
                break;
            case 3:
                System.out.println("Voê escolheu a dieta da batata");
                break;
        }

        System.out.println("Digite um numero");
        int total = entrada.nextInt();
        
        for(int i = 0; i < total; i++){
            System.out.println("loop");
        }

        int i = 0;

        while(i < total){
            System.out.println("Você gosta de batata!");
            i++;
        }


        entrada.close();
    }
}