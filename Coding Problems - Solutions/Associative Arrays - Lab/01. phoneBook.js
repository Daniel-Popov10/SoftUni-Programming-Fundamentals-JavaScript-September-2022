function phoneBook(list) {
    const phoneBook = {};

    for (const line of list) {
        let [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }

}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);