function filterPartyList(list) {

    let currentGuest = list.shift();
    let vipList = [];
    let regularList = [];

    while (currentGuest !== 'PARTY') {
        let isVIP = !isNaN(Number(currentGuest[0]));

        if (isVIP) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
        currentGuest = list.shift();
    }
    let fullList = vipList.concat(regularList);

    for (const person of list) {
        if (fullList.includes(person)) {
            let removePerson = fullList.indexOf(person);
            fullList.splice(removePerson, 1);
        }
    }
    let listLength = fullList.length;
    console.log(listLength);
    fullList.forEach(element => {
        console.log(element);
    });

}

filterPartyList(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]

);