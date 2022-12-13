function calculateResources(input) {
    let resources = {};
    let resource = '';
    let quantity = 0;
    for (let i = 0; i < input.length; i += 2) {

        resource = input[i];
        quantity = Number(input[i + 1]);

        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = quantity;
        } else {
            resources[resource] += quantity;
        }
    }


    for (const material in resources) {
        console.log(`${material} -> ${resources[material]}`);
    }
}
calculateResources([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)