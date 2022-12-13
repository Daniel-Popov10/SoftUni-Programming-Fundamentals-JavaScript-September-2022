function processCarInfo(input) {
    let numberOfCars = Number(input.shift());

    let carList = {};

    for (let index = 0; index < numberOfCars; index++) {

        let [car, mileage, fuel] = input.shift().split('|');

        carList[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }

    }
    let line = input.shift();

    while (line !== 'Stop') {
        const [command, ...arguments] = line.split(' : ');
        let car = arguments[0];
        switch (command) {
            case 'Drive':
                const distance = Number(arguments[1]);
                const availableFuel = Number(arguments[2]);
                if (carList[car].fuel < availableFuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carList[car].mileage += distance;
                    carList[car].fuel -= availableFuel;
                    console.log(`${car} driven for ${distance} kilometers. ${availableFuel} liters of fuel consumed.`);
                }

                if (carList[car].mileage >= 100000) {
                    delete carList[car]
                    console.log(`Time to sell the ${car}!`);
                }
                break;
            case 'Refuel':
                let refillFuel = Number(arguments[1]);

                if (carList[car].fuel + refillFuel >= 75) {
                    refillFuel = Math.abs(carList[car].fuel - 75);
                }
                carList[car].fuel += refillFuel;
                console.log(`${car} refueled with ${refillFuel} liters`);
                break;
            case 'Revert':
                const kilometers = Number(arguments[1]);
                carList[car].mileage -= kilometers;

                if (carList[car].mileage <= 10000) {
                    carList[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }
        line = input.shift()
    }

    for (const car in carList) {
        console.log(`${car} -> Mileage: ${carList[car].mileage} kms, Fuel in the tank: ${carList[car].fuel} lt.`);
    }
}

processCarInfo([
    '4',
    'Lamborghini Veneno|11111|10',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);