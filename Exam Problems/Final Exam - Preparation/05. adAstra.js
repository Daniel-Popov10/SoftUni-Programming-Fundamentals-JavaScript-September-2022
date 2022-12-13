function calculateFood(input) {
    let foodPattern = /([|\#])(?<itemName>[A-Za-z ]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let totalCalories = 0;

    let extractFood = foodPattern.exec(input);

    let productArr = [];

    while (extractFood !== null) {
        let item = extractFood.groups.itemName;
        let expDate = extractFood.groups.expiration;
        let calories = Number(extractFood.groups.calories);

        extractFood = foodPattern.exec(input);
        totalCalories += calories;

        let currentProductData = `Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`;
        productArr.push(currentProductData);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    productArr.forEach(item => (console.log(item)));

}


calculateFood(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);