function train(commands) {



    let wagonCount = commands.shift().split(' ').map(Number);
    let maxCapacity = Number(commands.shift());
    let arrLength = commands.length

    for (let i = 0; i < arrLength; i++) {
        let currentCommand = commands[i].split(' ');
        let passengersToAdd = Number(currentCommand[0]);
        let wagonToAdd = Number(currentCommand[1]);


        if (currentCommand[0] === 'Add') {
            wagonCount.push(wagonToAdd);
        } else if (passengersToAdd <= maxCapacity) {
            for (let j = 0; j < wagonCount.length; j++) {
                let currentPassengers = wagonCount[j];
                if (currentPassengers + passengersToAdd <= maxCapacity) {
                    wagonCount[j] += passengersToAdd;
                    break;
                }
            }
        }
    }
    console.log(wagonCount.join(' '));

}


train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);