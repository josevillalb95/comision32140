const { suma,division,multiplicacion,resta} = require(".");
test('suma 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});
test('suma 1(string) + 2 to equal 3', () => {
    expect(suma("1", 2)).toBe(3);
});
test('resta 4 - 2 to equal 2', () => {
    expect(resta(4, 2)).toBe(2);
});

test('mutiplicacion 4 - 2 to equal 2', () => {
    expect(multiplicacion(4, 2)).toBe(8);
});


test('division 4 - 2 to equal 2', () => {
    expect(division(4, 2)).toBe(2);
});