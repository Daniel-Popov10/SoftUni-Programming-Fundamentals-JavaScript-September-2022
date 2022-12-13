function productList(list) {

    let sortedList = list.sort();

    for (let i = 0; i < list.length; i++) {
        let list = `${i + 1}.${sortedList[i]}`
        console.log(list);
    }

}


productList(['Watermelon', 'Banana', 'Apples']);