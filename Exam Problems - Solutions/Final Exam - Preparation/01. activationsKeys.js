function createKey(input) {

    let activationKey = input.shift();

    let command = input.shift();

    while (command !== 'Generate') {

        let arguments = command.split('>>>');

        let currentInstruction = arguments.shift();

        switch (currentInstruction) {
            case 'Contains':
                let substring = arguments.shift();
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            case 'Flip':
                let [command, startIndex, endIndex] = arguments;
                startIndex = Number(startIndex);
                endIndex = Number(endIndex);
                let part = activationKey.substring(startIndex, endIndex);
                let modifyPart = command == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                activationKey = activationKey.replace(part, modifyPart);
                console.log(activationKey);
                break;
            case 'Slice':
                let [start, end] = arguments;
                start = Number(start);
                end = Number(end);
                let slicedPart = activationKey.substring(start, end);
                activationKey = activationKey.replace(slicedPart, '');

                console.log(activationKey);
                break;
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

createKey((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);