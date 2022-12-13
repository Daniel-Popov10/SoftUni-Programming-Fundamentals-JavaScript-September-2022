function spiceExtraction(startingYield) {

    let storaged = startingYield;
    let consumedByWorkers = 26;
    let leftForDay = 0;
    let totalLeft = 0;
    let days = 0;

    while (storaged >= 100) {

        days++;
        leftForDay = storaged - consumedByWorkers
        totalLeft += leftForDay
        storaged -= 10;

        if (storaged < 100) {
            totalLeft -= consumedByWorkers;
        }

    }
    console.log(days);
    console.log(totalLeft);

}


spiceExtraction(450);