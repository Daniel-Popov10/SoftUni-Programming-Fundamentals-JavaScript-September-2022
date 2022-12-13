function taxCalculator(input) {

    let currentTax = 0;
    let taxDecline = 0;
    let taxIncrease = 0;
    let isTaxed = false;
    let taxCollected = 0;

    let separatedCarsArray = input.shift().split('>>');
    let copyArray = separatedCarsArray.slice(0);

    for (let i = 0; i < copyArray.length; i++) {

        let currentRow = separatedCarsArray.shift().split(' ');
        let carType = currentRow[0];
        let yearsForTax = Number(currentRow[1]);
        let kilometersTraveled = Number(currentRow[2]);

        currentTax = 0;
        switch (carType) {
            case 'family':
                currentTax += 50;
                taxDecline = yearsForTax * 5;
                currentTax -= taxDecline;
                taxIncrease = Math.floor(kilometersTraveled / 3000) * 12;
                currentTax += taxIncrease;
                isTaxed = true;
                break;
            case 'heavyDuty':
                currentTax += 80;
                taxDecline = yearsForTax * 8;
                currentTax -= taxDecline;
                taxIncrease = Math.floor(kilometersTraveled / 9000) * 14;
                currentTax += taxIncrease;
                isTaxed = true;
                break;
            case 'sports':
                currentTax += 100;
                taxDecline = yearsForTax * 9;
                currentTax -= taxDecline;
                taxIncrease = Math.floor(kilometersTraveled / 2000) * 18;
                currentTax += taxIncrease;
                isTaxed = true;
                break;

            default: console.log('Invalid car type.');
                isTaxed = false;
                continue;

        }

        taxCollected += currentTax;

        if (isTaxed) {
            console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
        }
    }
    console.log(`The National Revenue Agency will collect ${taxCollected.toFixed(2)} euros in taxes.`);

}


taxCalculator((['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']));