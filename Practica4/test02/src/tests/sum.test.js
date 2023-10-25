const sum = require("../core/sum");

test("test", () => {
    // Se importa el módulo 'sum' desde el archivo '../core/sum'

    const a = 1; // Se declara una variable 'a' y se le asigna el valor 1
    const b = 2; // Se declara una variable 'b' y se le asigna el valor 2
    const expected = 3; // Se declara una variable 'expected' y se le asigna el valor 3

    // Se realiza la suma de 'a' y 'b' utilizando la función 'sum' y se almacena en la variable 'r'
    r = sum(a, b);

    // Se realiza una aserción para verificar si el resultado 'r' es igual al valor esperado 'expected'
    expect(r).toBe(expected);
});
