function printReceipt(input) {

    let currentCommand = input.shift();
    let totalTax = 0;
    let priceWithoutTax = 0;
    let totalPrice = 0;


    while (currentCommand !== 'special' && currentCommand !== 'regular') {

        let currentPrice = Number(currentCommand);

        if (currentPrice < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTax += currentPrice;
        }

        if (currentPrice > 0) {
            let tax = Number(currentCommand) * 0.20;
            totalTax += tax;
        }


        totalPrice = priceWithoutTax + totalTax;

        currentCommand = input.shift();

        if (currentCommand === 'special') {
            totalPrice *= 0.90;
        }

    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }


}

printReceipt(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])




)