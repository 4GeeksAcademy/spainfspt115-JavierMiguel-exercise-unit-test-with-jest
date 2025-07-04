// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;   
}

const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    
    return euros * oneEuroIs.JPY;
}

const fromYenToPound = (yens) => {
    let euros = yens / oneEuroIs.JPY;
    
    return euros * oneEuroIs.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };