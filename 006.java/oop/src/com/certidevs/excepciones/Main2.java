package com.certidevs.excepciones;

public class Main2 {

    public static void main(String[] args) {

        // multicatch

        try {
            String nombre = null;
            nombre.split(" ");
        } catch (ArithmeticException | NullPointerException | IndexOutOfBoundsException e) {

        }
    }
}
