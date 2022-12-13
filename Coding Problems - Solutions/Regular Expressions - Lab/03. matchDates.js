function matchDates(dates) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let numbers = dates.shift();

    let matchedDates = pattern.exec(numbers);

    while (matchedDates !== null) {
        let day = matchedDates.groups['day'];
        let month = matchedDates.groups['month'];
        let year = matchedDates.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        matchDates = matchedDates = pattern.exec(numbers);
    }

}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);