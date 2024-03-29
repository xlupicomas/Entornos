/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package gradle;

public class App {
    private int[] array;

    public App(int[] array1){
        array = array1;
    }
    public int retornarPrimer(){
        if ( array == null || array.length == 0) {
            return 0;
        }
        return array[0];
    }
    public int retornarDarrer(){
        if (array == null || array.length == 0) {
            return 0;
        }
        return array[array.length - 1];
    }
    public int retornarTercer(){
        if (array == null || array.length == 0 || array.length < 3) {
            return 0;
        }
        // if (array.length < 3) {
        //     return null;
        // }
        return array[2];
    }
    public int contarElements(){
        if (array == null || array.length == 0) {
            return 0;
        }
        return array.length;
    }
    public int sumarElements(){
        if (array == null || array.length == 0) {
            return 0;
        }
        int suma = 0;
        int contador = 0;
        while (contador < array.length) {
            suma = suma + array[contador];
            contador++;
        }
        return suma;
    }
    public double mitjanaElements(){
        if (array == null || array.length == 0) {
            return 0;
        }
        double suma = 0;
        int contador = 0;
        while (contador < array.length) {
            suma = suma + array[contador];
            contador++;
        }
        return suma/array.length;
    }
}
