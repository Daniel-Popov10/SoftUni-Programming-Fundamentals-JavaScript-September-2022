function calculateOrders(input) {
    let totalIncome = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^0-9|$%.]*(?<price>[\d]+[.]*[\d]+)\$/g;


    let currentCommand = input.shift();

    while (currentCommand !== 'end of shift') {

        let currentRow = pattern.exec(currentCommand);
        while (currentRow !== null) {
            let name = currentRow.groups.name;
            let product = currentRow.groups.product;
            let count = Number(currentRow.groups.count);
            let price = Number(currentRow.groups.price);
            let calculatePrice = count * price;
            totalIncome += calculatePrice;
            console.log(`${name}: ${product} - ${calculatePrice.toFixed(2)}`);

            currentRow = pattern.exec(currentCommand);

        }

        currentCommand = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

calculateOrders(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);