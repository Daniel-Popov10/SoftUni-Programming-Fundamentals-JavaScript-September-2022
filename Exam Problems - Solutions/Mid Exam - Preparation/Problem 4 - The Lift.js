function findSpot(input) {
    let peopleWaiting = Number(input.shift());
    let totalWagons = (input.shift().split(' ').map(Number));
    let maxWagonCapacity = 4
    let currentCapacity = 0;
    let maxCapacity = totalWagons.length * maxWagonCapacity;

    let finalLiftState = [];

    for (let i = 0; i < totalWagons.length; i++) {
        let currentWagon = totalWagons[i];

        while (currentWagon < 4 & peopleWaiting > 0) {
            currentCapacity++;
            currentWagon++;
            peopleWaiting--;
        }
        finalLiftState.push(currentWagon);
    }

    if (maxCapacity >= currentCapacity) {
        console.log(`The lift has empty spots!`);
        console.log(finalLiftState.join(' '));
    }

    if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(finalLiftState.join(' '));
    }

    if (peopleWaiting === 0) {
        console.log(finalLiftState.join(' '));
    }


}



findSpot(

    [
        "20",
        "0 2 0"
    ]



);