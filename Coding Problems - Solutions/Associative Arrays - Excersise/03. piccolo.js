function trackCars(cars) {
    let parkingList = new Map();


    let fullList = cars.map(el => el.split(', '));

    fullList.forEach(element => {
        const [command, carPlate] = element;

        if (command === 'IN') {
            parkingList.set(carPlate, command);
        } else if (command === 'OUT') {
            parkingList.delete(carPlate);
        }
    });

    let sortList = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));

    for (const plate of sortList) {
        console.log(plate[0]);
    }

    if (sortList.length === 0) {
        console.log('Parking Lot is Empty');
    }
}

trackCars(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);