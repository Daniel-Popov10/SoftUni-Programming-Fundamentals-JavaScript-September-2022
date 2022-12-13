function printCityInfo(cityInfo) {
    let currentProperty = Object.keys(cityInfo);
    for (const value of currentProperty) {
        console.log(`${value} -> ${cityInfo[value]}`);
    }

}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)