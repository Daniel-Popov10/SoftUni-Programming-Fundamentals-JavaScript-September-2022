function createExhibition(input) {
    let plantCount = Number(input.shift());

    let plants = {

    };

    for (let i = 0; i < plantCount; i++) {

        let [plant, rarity] = input.shift().split('<->');

        plants[plant] = {
            rarity: Number(rarity),
            rating: []
        }
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let [typeOfCommand, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');

        if (plants[plantName]) {

            switch (typeOfCommand) {
                case 'Rate':
                    let rating = Number(argument);
                    plants[plantName].rating.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plants[plantName].rarity = rarity;
                    break;
                case 'Reset':
                    plants[plantName].rating.splice(0);
                    break;
            }
        } else {
            console.log('error');
        }
        command = input.shift();
    }
    console.table('Plants for the exhibition:');
    for (const plant in plants) {
        let sum = 0;
        let ratingsCount = plants[plant].rating.length;
        plants[plant].rating.forEach(rating => {
            sum += rating;
        });

        let averageRating = sum / ratingsCount;
        if (!averageRating) {
            averageRating = 0;
        }
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}

createExhibition(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
