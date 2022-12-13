function sortHeroes(list) {

    let heroes = [];

    for (const line of list) {
        let [name, level, items] = line.split(' / ');
        let currentHero = {
            name,
            level: Number(level),
            items,
        };
        heroes.push(currentHero);
        heroes.sort((a, b) => a.level - b.level);
    }

    heroes.forEach(heroe => {
        console.log(`Hero: ${heroe.name}`);
        console.log(`level => ${heroe.level}`);
        console.log(`items => ${heroe.items}`);
    });
}


sortHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);