// Importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
})

test("100 dollars should be 14626.168", function() {
    // 1 euro == 156.5 yens, so we convert 100 dollars to euros and then * 156.7 yens = 14626.168 yens
    expect(fromDollarToYen(100)).toBeCloseTo(14626.168); 
})

test("100 yenes should be 0.555", function() {
    // 1 euro == 156.5 yens, so we convert 100 yens to euros and then * 0.87 pounds = 0.555 pounds
    expect(fromYenToPound(100)).toBeCloseTo(0.555);
})