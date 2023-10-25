import { sum } from "../core/sum";
// Se importa la función 'sum' desde el archivo '../core/sum'.

test("suma dos numeros", () => {
    // Se define una prueba con la descripción "suma dos numeros".

    const a = 1; // Se declara una constante 'a' y se le asigna el valor 1.
    const b = 2; // Se declara una constante 'b' y se le asigna el valor 2.
    const expected = 3; // Se declara una constante 'expected' y se le asigna el valor 3.

    // Se realiza la suma de 'a' y 'b' utilizando la función importada 'sum' y se almacena en la constante 'result'.
    const result = sum(a, b);

    // Se utiliza la función 'expect' para realizar una aserción y verificar si 'result' es igual al valor esperado 'expected'.
    expect(result).toBe(expected);
});
