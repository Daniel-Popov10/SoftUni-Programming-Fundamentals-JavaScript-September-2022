function vacationCalculator(groupNum, groupType, dayOfWeek) {

    let price = 0;

    if (groupType === 'Business' && groupNum >= 100) {
        groupNum -= 10;
    }

    switch (dayOfWeek) {

        case 'Friday':
            if (groupType === 'Students') {
                price = 8.45;
            } else if (groupType === 'Business') {
                price = 10.90;
            } else if (groupType === 'Regular') {
                price = 15;
            } break;
        case 'Saturday':
            if (groupType === 'Students') {
                price = 9.80;
            } else if (groupType === 'Business') {
                price = 15.60;
            } else if (groupType === 'Regular') {
                price = 20;
            } break;
        case 'Sunday':
            if (groupType === 'Students') {
                price = 10.46;
            } else if (groupType === 'Business') {
                price = 16;
            } else if (groupType === 'Regular') {
                price = 22.50;
            } break;

    }

    if (groupType === 'Students' && groupNum >= 30) {
        price *= 0.85;
    } else if (groupType === 'Regular' && groupNum >= 10 && groupNum <= 20) {
        price *= 0.95;
    }

    console.log(`Total price: ${(price * groupNum).toFixed(2)}`);
}


vacationCalculator(15, "Regular", "Saturday");