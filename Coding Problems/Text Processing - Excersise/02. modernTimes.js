function findHashTag(string) {
    let textArr = string.split(' ');


    for (let word of textArr) {
        if (word.startsWith('#') && word.length > 1) {
            let result = '';
            let isValid = true;
            word = word.substring(1);
            for (let i = 0; i < word.length; i++) {
                let char = word[i];
                if ((char.charCodeAt() < 65 || char.charCodeAt() > 90) && (char.charCodeAt() < 97 || char.charCodeAt() > 122)) {
                    isValid = false;
                } else {
                    result += char;
                }
            }

            if (isValid) {
                console.log(result);
            }

        }
    }
}

findHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');