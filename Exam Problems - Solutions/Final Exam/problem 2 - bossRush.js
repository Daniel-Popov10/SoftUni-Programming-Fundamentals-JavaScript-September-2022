function bossInfo(input) {
    let bossPattern = /\|(?<bossName>[A-Z]+)\|:\#(?<title>[A-Za-z]+ [A-Za-z]+)\#/g;

    let bossCount = Number(input.shift());
    let boss = input.shift();

    for (let index = 0; index < bossCount; index++) {

        let currentBoss = bossPattern.exec(boss);

        if (currentBoss !== null) {
            let name = currentBoss.groups.bossName;
            let title = currentBoss.groups.title;
            let strength = name.length;
            let armor = title.length;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        } else {
            console.log('Access denied!');
        }

        currentBoss = bossPattern.exec(boss);
        boss = input.shift();

    }
}

bossInfo(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])

