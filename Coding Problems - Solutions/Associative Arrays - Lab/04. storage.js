function storage(list) {
    let storedList = new Map();

    for (const line of list) {
        let [product, num] = line.split(' ');
        let quantity = Number(num);

        if (storedList.has(product)) {
            quantity += storedList.get(product)
        }
        storedList.set(product, quantity);
    }

    for (const product of storedList) {
        console.log(`${product[0]} -> ${product[1]}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);