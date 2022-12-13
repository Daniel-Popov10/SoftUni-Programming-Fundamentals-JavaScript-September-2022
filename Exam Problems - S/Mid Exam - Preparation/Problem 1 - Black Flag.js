function plunder(arr) {

    let daysOfPlunder = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let target = Number(arr.shift());

    let totalPlunder = 0;

    for (i = 1; i <= daysOfPlunder; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else if (totalPlunder < target) {
        let percent = ((totalPlunder / target) * 100)
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}


plunder((["10", "20", "380"]));