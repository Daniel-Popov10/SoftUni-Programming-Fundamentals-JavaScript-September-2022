function wildZoo(input) {
    let animalsObject = {};
    let line = input.shift();

    while (line !== 'EndDay') {
        let [command, ...animalInfo] = line.split(': ');
        let animalCommands = animalInfo.toString().split('-');
        let name = animalCommands[0];
        switch (command) {
            case 'Add':
                const foodNeed = Number(animalCommands[1]);
                const animalArea = animalCommands[2];

                if (!animalsObject.hasOwnProperty(name)) {
                    animalsObject[name] = {
                        foodNeed,
                        animalArea,
                        areaCounter: Number()
                    }
                    if (animalsObject.hasOwnProperty(name)) {
                        animalsObject[name].areaCounter += 1;
                    }
                } else {
                    animalsObject[name].foodNeed += foodNeed;
                }
                break;
            case 'Feed':
                const food = Number(animalCommands[1]);
                if (animalsObject.hasOwnProperty(name)) {
                    animalsObject[name].foodNeed -= food;
                }
                if (animalsObject.hasOwnProperty(name) && animalsObject[name].foodNeed <= 0) {
                    console.log(`${name} was successfully fed`);
                    delete animalsObject[name];
                }
                break;
        }
        line = input.shift();
    }
    console.log('Animals:');
    for (const animal in animalsObject) {
        console.log(`${animal} -> ${animalsObject[animal].foodNeed}g`);

    }
    console.log('Areas with hungry animals:');
    for (const animal in animalsObject) {
        console.log(`${animalsObject[animal].animalArea}: ${animalsObject[animal].areaCounter}`);
    }

}

wildZoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])




