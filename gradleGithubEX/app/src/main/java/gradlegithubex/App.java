/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package gradlegithubex;

public class App {
    public String getGreeting() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
    }

    public int sumar(int n1, int n2){
        int nR = n1 + n2;
        return nR;
    }
    public int restar(int n1, int n2){
        int nR = n1 - n2;
        return nR;
    }
}