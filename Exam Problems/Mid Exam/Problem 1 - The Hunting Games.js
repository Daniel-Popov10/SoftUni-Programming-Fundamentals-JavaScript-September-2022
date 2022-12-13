function huntingGame(input) {

    // sepparate array data to quest objectives - Done

    let daysOfAdventure = Number(input.shift());
    let numberOfPlayers = Number(input.shift());
    let totalGroupEnergy = Number(input.shift());
    let waterPerDayForPerson = Number(input.shift());
    let foodPerDayForPerson = Number(input.shift());

    let energyLostPerDay = input.map(Number);

    // calculate total water and food supplies - Done

    let totalWaterSupplies = waterPerDayForPerson * daysOfAdventure * numberOfPlayers;
    let totalFoodSupplies = foodPerDayForPerson * daysOfAdventure * numberOfPlayers;

    for (let i = 1; i <= daysOfAdventure; i++) {

        let currentEnergyLoss = energyLostPerDay[i - 1];


        /// substract energy lost each day and end program if energy reaches zero - Done

        if (totalGroupEnergy <= 0) {
            break;
        } else {
            totalGroupEnergy -= currentEnergyLoss;
        }


        // calculate energy boost when drinking water and how much water supplies players lose from current water - Done

        if (i % 2 === 0 && i !== 0) {
            let waterBoost = totalGroupEnergy * 0.05;
            totalGroupEnergy += waterBoost;
            totalWaterSupplies *= 0.70;
        }

        // calculate how much food they lose each 3rd day they eat and add 10% energy.

        if (i % 3 === 0 && i !== 0) {
            let lostFoodSupplies = totalFoodSupplies / numberOfPlayers;
            totalFoodSupplies -= lostFoodSupplies;
            let foodBoost = totalGroupEnergy * 0.10;
            totalGroupEnergy += foodBoost;
        }
    }


    if (totalGroupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${totalGroupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFoodSupplies.toFixed(2)} food and ${totalWaterSupplies.toFixed(2)} water.`);
    }

}


huntingGame((["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"])




)