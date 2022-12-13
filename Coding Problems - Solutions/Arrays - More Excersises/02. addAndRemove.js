function addAndRemove(arr) {
    let arrL = arr.length
    let initialNumberArr = [];
    let initialNumber = 0;


    for (let i = 0; i < arrL; i++) {
        let currentCommand = arr[i]
        if (currentCommand === 'add') {
            initialNumber++;
            initialNumberArr.push(initialNumber);
        } else if (currentCommand === 'remove') {
            initialNumber++;
            initialNumberArr.pop();
        }

    }

    if (initialNumberArr.length <= 0) {
        console.log('Empty');
    } else {
        console.log(initialNumberArr.join(' '));
    }


}


addAndRemove(['remove', 'remove', 'remove', 'remove']);


