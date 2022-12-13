function addAndSubstract(arr) {
  let sumOriginal = 0;
  let sumModified = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOriginal += arr[i];
      arr[i] += i;
      sumModified += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOriginal += arr[i];
      arr[i] -= i;
      sumModified += arr[i];
    }
  }

  console.log(arr);
  console.log(sumOriginal);
  console.log(sumModified);
}

addAndSubstract([5, 15, 23, 56, 35]);
