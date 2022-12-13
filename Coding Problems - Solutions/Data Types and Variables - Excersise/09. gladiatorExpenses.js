function expenses(lostCount, helmet, sword, shield, armor) {

    let lostFights = lostCount;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShield = 0;

    let expenses = 0;

    for (let fightsCount = 1; fightsCount <= lostFights; fightsCount++) {

        if (fightsCount % 2 === 0) {
            expenses += helmetPrice;
        }

        if (fightsCount % 3 === 0) {
            expenses += swordPrice;
        }

        if (fightsCount % 2 === 0 && fightsCount % 3 === 0) {
            brokenShield++;
            expenses += shieldPrice;
            if (brokenShield % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${(expenses).toFixed(2)} aureus`);

}

expenses(23, 12.50, 21.50, 40, 200); 