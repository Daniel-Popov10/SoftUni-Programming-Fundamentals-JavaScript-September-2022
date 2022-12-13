function loadingBar(number) {
    let loaded = '%'.repeat(number / 10);
    let notLoaded = '.'.repeat(10 - (number / 10));

    if (number === 100) {
        console.log('100% Complete!');
    } else if (number < 100) {
        console.log(`${number}% [${loaded}${notLoaded}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);