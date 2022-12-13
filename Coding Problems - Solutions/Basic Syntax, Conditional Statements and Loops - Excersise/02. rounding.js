function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let output = parseFloat(number.toFixed(precision));

    console.log(output);

}

rounding(10.5, 3);