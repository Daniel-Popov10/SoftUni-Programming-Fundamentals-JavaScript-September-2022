function orderPrice(product, quantity) {
    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.50 * quantity;
            break;
        case 'water':
            price = 1 * quantity;
            break;
        case 'coke':
            price = 1.40 * quantity;
            break;
        case 'snacks':
            price = 2 * quantity;
            break;
    }

    return price.toFixed(2);
}

let finalPrice = orderPrice('water', 5);
console.log(finalPrice);