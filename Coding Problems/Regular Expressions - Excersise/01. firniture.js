function calculateCost(furnitureList) {

    const pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>[\d]+[.]*[\d]+)!(?<quantity>[\d]+)/g;

    let command = furnitureList.shift();
    let totalPrice = 0;
    console.log(`Bought furniture:`)
    while (command !== 'Purchase') {
        let currentItem = pattern.exec(command);
        while (currentItem !== null) {
            let itemName = currentItem.groups.name;
            console.log(`${itemName}`);
            let itemPrice = Number(currentItem.groups.price);
            let itemQuantity = Number(currentItem.groups.quantity);
            let currentItemPrice = itemPrice * itemQuantity;
            totalPrice += currentItemPrice;
            currentItem = pattern.exec(command);
        }
        command = furnitureList.shift();
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

calculateCost(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
)