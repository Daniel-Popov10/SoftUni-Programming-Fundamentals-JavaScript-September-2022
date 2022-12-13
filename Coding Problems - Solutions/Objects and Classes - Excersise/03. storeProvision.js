function storeProvision(currentStock, order) {
    const storedProducts = {};

    const currentLength = currentStock.length;
    let orderedLength = order.length;

    for (let i = 0; i < currentLength; i += 2) {
        const currentProduct = currentStock[i];
        storedProducts[currentProduct] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedLength; i += 2) {
        const currentProduct = order[i];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(order[i + 1]);
    }
    for (const key in storedProducts) {
        console.log(`${key} -> ${storedProducts[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);