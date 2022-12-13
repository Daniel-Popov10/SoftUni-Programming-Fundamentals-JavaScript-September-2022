function poundsConverter(pound) {

    let conversionRate = 1.31
    let conversion = (pound * conversionRate).toFixed(3);
    console.log(conversion);
}


poundsConverter(80);