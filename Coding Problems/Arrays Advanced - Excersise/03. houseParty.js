function houseParty(arr) {

    let partyList = [];

    for (const element of arr) {
        let command = element.split(' ');

        if (command.length === 3) {
            if (partyList.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                partyList.push(command[0]);
            }
        }

        if (command.length === 4) {
            if (partyList.includes(command[0])) {
                partyList.pop(command[0]);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }
    console.log(partyList.join('\n'));
}


houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!',]
);