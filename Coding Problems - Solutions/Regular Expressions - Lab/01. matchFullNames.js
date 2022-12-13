function matchNames(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matchedNames = names.match(pattern);
    console.log(matchedNames.join(' '));
}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");