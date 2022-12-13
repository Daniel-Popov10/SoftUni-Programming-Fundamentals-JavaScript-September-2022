function sortNumbers(numOne, numTwo, numThree) {

    let n1 = Number(numOne);
    let n2 = Number(numTwo);
    let n3 = Number(numThree);

    let highestNum = 0;
    let middleNum = 0;
    let lowestNum = 0;



    if (n1 >= n2 && n1 >= n3) {
        highestNum = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        highestNum = n2;
    } else if (n3 >= n1 && n3 >= n2) {
        highestNum = n3;
    }

    if (n1 <= n2 && n1 <= n3) {
        lowestNum = n1;
    } else if (n2 <= n1 && n2 <= n3) {
        lowestNum = n2;
    } else if (n3 <= n1 && n3 <= n2) {
        lowestNum = n3;
    }


    if ((n1 >= n2 && n1 <= n3) || (n1 <= n2 && n1 >= n3)) {
        middleNum = n1;
    } else if ((n2 >= n1 && n2 <= n3) || (n2 <= n1 && n2 >= n3)) {
        middleNum = n2;
    } else if ((n3 >= n1 && n3 <= n2) || (n3 <= n1 && n3 >= n2)) {
        middleNum = n3;
    }



    console.log(highestNum);
    console.log(middleNum);
    console.log(lowestNum);

}


sortNumbers(2, 2, 3);