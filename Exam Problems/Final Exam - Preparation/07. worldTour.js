function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();
    let buildResult = '';

    while (command !== 'Travel') {
        let currentCommand = command.split(':');
        let line = currentCommand[0];

        switch (line) {
            case 'Add Stop':
                let index = Number(currentCommand[1]);
                let string = currentCommand[2];
                if (index >= 0 && index < stops.length) {
                    buildResult = stops.slice(0, index) + string + stops.slice(index);
                    stops = buildResult;
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(currentCommand[1]);
                let endIndex = Number(currentCommand[2]);
                if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                    buildResult = stops.slice(startIndex, endIndex + 1);
                    stops = stops.replace(buildResult, '');
                }
                break;
            case 'Switch':
                let oldString = currentCommand[1];
                let newString = currentCommand[2].trimStart();

                if (stops.includes(oldString)) {
                    let regExp = new RegExp(oldString, 'g');
                    stops = stops.replace(regExp, newString);
                }
                break;
        }
        console.log(stops);
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}

worldTour(["Hawai::Cyprys-Greece:Hawai:Hawai",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
