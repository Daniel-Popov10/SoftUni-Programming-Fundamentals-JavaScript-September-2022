function convertToObject(json) {
    let convertToObject = JSON.parse(json);
    let currentObject = Object.keys(convertToObject);

    for (const value of currentObject) {
        console.log(`${value}: ${convertToObject[value]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');