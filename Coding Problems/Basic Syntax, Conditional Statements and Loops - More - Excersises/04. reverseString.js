function reverseString(word) {

    let str = word;
    let buff = ""

    for (i = word.length; i <= str.length; i--) {
        buff += (str.charAt(i))

        if (i === 0) {
            break;
        }
    }
    console.log(buff);

}

reverseString('SoftUni');