function desinationMapper(input) {
    let pattern = input;
    let travelPoints = 0;
    let destinationsArr = [];

    let destinationPattern = /([=|\/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g
    let extractDestinations = destinationPattern.exec(pattern);
    while (extractDestinations !== null) {
        let destination = extractDestinations.groups.destination;
        destinationsArr.push(destination);
        travelPoints += destination.length;
        extractDestinations = destinationPattern.exec(pattern);
    }
    console.log(`Destinations: ${destinationsArr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}

desinationMapper("ThisIs some InvalidInput");