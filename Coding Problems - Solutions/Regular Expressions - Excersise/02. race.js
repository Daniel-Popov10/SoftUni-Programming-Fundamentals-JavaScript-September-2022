function sortRacers(input) {
    let namesList = input.shift();
    let racerList = {};
    let distance = 0;
    let name = '';
    let namesPattern = /[A-Za-z]+/g;
    let distancePattern = /[0-9]/g;

    let command = input.shift();

    while (command !== 'end of race') {
        let currentName = command.match(namesPattern);
        let currentDistance = command.match(distancePattern);

        currentName.forEach(letter => {
            name += letter;
        });

        currentDistance.forEach(number => {
            number = Number(number);
            distance += number;

        });

        if (namesList.includes(name)) {
            if (racerList.hasOwnProperty(name)) {
                racerList[name] += distance;
            } else {
                racerList[name] = distance;
            }
        }

        name = '';
        distance = 0;
        command = input.shift();
    }
    let sortRacers = Object.entries(racerList).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortRacers[0][0]}`);
    console.log(`2nd place: ${sortRacers[1][0]}`);
    console.log(`3rd place: ${sortRacers[2][0]}`);
}

sortRacers(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']

);