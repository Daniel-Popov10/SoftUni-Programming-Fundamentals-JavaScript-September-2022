function pirates(input) {
    let currentCommand = input.shift();
    let cities = {};
    while (currentCommand !== 'Sail') {
        let [city, population, gold] = currentCommand.split('||');

        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                population: Number(population),
                gold: Number(gold),
            }
        } else {
            cities[city].population += Number(population);
            cities[city].gold += Number(gold);
        }
        currentCommand = input.shift();
    }

    currentCommand = input.shift();

    while (currentCommand !== 'End') {
        let line = currentCommand.split('=>');
        let event = line[0];
        let city = line[1];
        switch (event) {
            case 'Plunder':
                let peopleKilled = Number(line[2]);
                let goldStolen = Number(line[3]);

                cities[city].population -= peopleKilled;
                cities[city].gold -= goldStolen;

                console.log(`${city} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

                if (cities[city].gold <= 0 || cities[city].population <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete cities[city];
                }
                break;
            case 'Prosper':

                let goldIncrease = Number(line[2]);
                if (goldIncrease < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    cities[city].gold += goldIncrease;
                    console.log(`${goldIncrease} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
                }
                break;
        }

        currentCommand = input.shift();

    }

    let allCities = Object.keys(cities);

    if (allCities.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${allCities.length} wealthy settlements to go to:`);
        for (const city in cities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        }
    }
}

pirates(
    (["Nassau||95000||1000",
        "San Juan||930000||1250",
        "Campeche||270000||690",
        "Port Royal||320000||1000",
        "Port Royal||100000||2000",
        "Sail",
        "Prosper=>Port Royal=>-200",
        "Plunder=>Nassau=>94000=>750",
        "Plunder=>Nassau=>1000=>150",
        "Plunder=>Campeche=>150000=>690",
        "End"])


);