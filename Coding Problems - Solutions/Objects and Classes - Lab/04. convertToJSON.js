function convertToJSON(firstName, lastName, hairColor) {
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(info));
}

convertToJSON('George', 'Jones', 'Brown');