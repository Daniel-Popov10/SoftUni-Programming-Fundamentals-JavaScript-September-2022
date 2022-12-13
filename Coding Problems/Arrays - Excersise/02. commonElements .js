function commonElements(arrOne, arrTwo) {

  for (let i = 0; i < arrOne.length; i++) {
    let stringOne = arrOne[i];
    for (let o = 0; o < arrTwo.length; o++) {
      let stringTwo = arrTwo[o];
      if (arrOne[i] === arrTwo[o]) {
        console.log(arrOne[i]);
      }
    }
  }

}

commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2']
);
