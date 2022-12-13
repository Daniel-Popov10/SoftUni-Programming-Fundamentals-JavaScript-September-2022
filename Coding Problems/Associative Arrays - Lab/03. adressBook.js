function addressBook(list) {

    let adressBook = {};
    for (const person of list) {
        let [name, address] = person.split(':');
        adressBook[name] = address;
    }

    let bookEntires = Object.entries(adressBook);

    bookEntires.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedBook = Object.fromEntries(bookEntires);

    for (const [person, address] of Object.entries(sortedBook)) {
        console.log(`${person} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);