/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package gradle;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AppTest {
    @Test void appArrayRetornaPrimerAmbArrayComplet(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);
        
        assertEquals(1, miarray.retornarPrimer());
    }

    @Test void appArrayRetornaPrimerAmbArrayBuit(){
        int[] listaNull = {};
        App miarrayNull = new App(listaNull);
        
        assertEquals(0, miarrayNull.retornarPrimer());
    }

    @Test void appArrayRetornaPrimerAmbArrayNull(){
        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        
        assertEquals(0, miarrayNull2.retornarPrimer());
    }

    @Test void appArrayRetornaDarrerComplet(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);  
        assertEquals(4, miarray.retornarDarrer());

    }
    @Test void appArrayRetornaDarrerBuit(){
        int[] listaNull = {};
        App miarrayNull = new App(listaNull);

        assertEquals(0, miarrayNull.retornarDarrer());
    }
    @Test void appArrayRetornaDarrerNull(){

        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);

        assertEquals(0, miarrayNull2.retornarDarrer());
    }
    @Test void appArrayRetornaTercerComplet(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);   

        assertEquals(3, miarray.retornarTercer());

    }
    @Test void appArrayRetornaTercerAmbMenysDeTres(){
        int[] lista2 = {1,2};
        App miarray2 = new App(lista2);

        assertEquals(0, miarray2.retornarTercer());

    }
    @Test void appArrayRetornaTercerBuit(){

        int[] listaNull = {};
        App miarrayNull = new App(listaNull);

        assertEquals(0, miarrayNull.retornarTercer());

    }
    @Test void appArrayRetornaTercerNull(){

        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        

        assertEquals(0, miarrayNull2.retornarTercer());
    }
    @Test void appArraycontaCompletr(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);

        assertEquals(4, miarray.contarElements());

    }
    @Test void appArraycontarBuit(){

        int[] listaNull = {};
        App miarrayNull = new App(listaNull);

        assertEquals(0, miarrayNull.contarElements());

    }
    @Test void appArraycontarNull(){

        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        
        assertEquals(0, miarrayNull2.contarElements());
    }
    @Test void appArraymitjanaElements(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);
        int[] lista2 = {-1,-2,3,4};
        App miarray2 = new App(lista2);
        int[] listaNull = {};
        App miarrayNull = new App(listaNull);
        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        
        assertEquals(2.5, miarray.mitjanaElements());
        assertEquals(1, miarray2.mitjanaElements());
        assertEquals(0, miarrayNull.mitjanaElements());
        assertEquals(0, miarrayNull2.mitjanaElements());
    }
    @Test void appArraymitjanaElementsComplet(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);
        
        
        assertEquals(2.5, miarray.mitjanaElements());
    }
    @Test void appArraymitjanaElementsAmbNegatius(){

        int[] lista2 = {-1,-2,3,4};
        App miarray2 = new App(lista2);

        assertEquals(1, miarray2.mitjanaElements());
    }
    @Test void appArraymitjanaElementsBuit(){

        int[] listaNull = {};
        App miarrayNull = new App(listaNull);

        assertEquals(0, miarrayNull.mitjanaElements());
    }
    @Test void appArraymitjanaElementsNull(){

        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        
        assertEquals(0, miarrayNull2.mitjanaElements());
    }
    @Test void appArraysumarElementsComplet(){
        int[] lista = {1,2,3,4};
        App miarray = new App(lista);
        
        assertEquals(10, miarray.sumarElements());

    }
    @Test void appArraysumarElementsAmbNegatius(){

        int[] lista2 = {-1,-2,3,4};
        App miarray2 = new App(lista2);

        assertEquals(4, miarray2.sumarElements());

    }
    @Test void appArraysumarElementsBuit(){


        int[] listaNull = {};
        App miarrayNull = new App(listaNull);

        assertEquals(0, miarrayNull.sumarElements());
    }
    @Test void appArraysumarElementsNull(){
        int[] listaNull2 = null;
        App miarrayNull2 = new App(listaNull2);
        
        assertEquals(0, miarrayNull2.sumarElements());
    }
    
}
