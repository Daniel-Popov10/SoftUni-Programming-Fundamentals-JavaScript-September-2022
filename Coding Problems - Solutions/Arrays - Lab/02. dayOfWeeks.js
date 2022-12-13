function dayOfweek(day) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday', 'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log('Invalid day!');
    }
}



dayOfweek(10);