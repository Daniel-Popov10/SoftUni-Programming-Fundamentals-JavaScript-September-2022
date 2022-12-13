function lowerOrUpper(char) {

    let character = char;

    let result = character.toUpperCase() === character ? 'upper-case' : 'lower-case'
    console.log(result);

}


lowerOrUpper('F');