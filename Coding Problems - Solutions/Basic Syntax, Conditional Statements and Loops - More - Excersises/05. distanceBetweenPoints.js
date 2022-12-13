function distanceBetweenPoints(pointOne, pointTwo, pointThree, pointFour) {

    let x1 = Number(pointOne);
    let y1 = Number(pointTwo);
    let x2 = Number(pointThree);
    let y2 = Number(pointFour);

    let x = x1 - x2;
    let y = y1 - y2;

    let xSq = Math.pow(x, 2);
    let ySq = Math.pow(y, 2);

    let totalSq = xSq + ySq;
    let result = Math.sqrt(totalSq);

    console.log(result);

}


distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);