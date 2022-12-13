function evenOrOdd(nums) {
    let even = 0;
    let odd = 0;
    for (i = 0; i < nums.length; i++) {


        if (nums[i] % 2 == 0) {
            even += nums[i];
        } else {
            odd += nums[i];

        }
    }

    let finalResult = even - odd;
    console.log(finalResult);

}



evenOrOdd([3, 5, 7, 9]);