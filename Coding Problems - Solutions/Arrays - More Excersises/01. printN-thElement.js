function printNth(arr) {

    let arrL = arr.length;
    let step = Number(arr[arrL - 1]);
    let collection = []

    for (let i = 0; i < arrL - 1; i += step) {
        collection.push(arr[i]);

    }
    console.log(collection.join(' '));
}


printNth(['dsa', 'asd', 'test', 'test', '2']);