function schoolLibrary(books) {
    // separate shelf with books from commands - Done

    let shelfWithBooks = books.shift().split('&');
    let initialCommand = books.shift();


    while (initialCommand !== 'Done') {
        // define commands and books - Done
        let currentRow = initialCommand.split(' | ');
        let command = currentRow[0];
        let book = currentRow[1];
        let secondBook = currentRow[2];

        switch (command) {
            // add book in the first place of shelf, if book is on shelf ignore the command - Done
            case 'Add Book':
                if (!shelfWithBooks.includes(book)) {
                    shelfWithBooks.unshift(book);
                }
                break;
            // remove book with given name if book is on the shelf, otherwise ignore command - Done
            case 'Take Book':
                if (shelfWithBooks.includes(book)) {
                    let bookIndex = shelfWithBooks.indexOf(book);
                    shelfWithBooks.splice(bookIndex, 1);
                }
                break;
            // Swap the place of book 1 with book 2 in the array, if one of the books is missing ignore command
            case 'Swap Books':
                let bookOneIndex = shelfWithBooks.indexOf(book);
                let bookTwoIndex = shelfWithBooks.indexOf(secondBook);
                if (bookOneIndex >= 0 && bookTwoIndex >= 0) {
                    shelfWithBooks.splice(bookOneIndex, 1, secondBook);
                    shelfWithBooks.splice(bookTwoIndex, 1, book);
                }
                break;
            // add the book to the end of the shelf, if book is already present ignore the command - Done
            case 'Insert Book':
                if (!shelfWithBooks.includes(book)) {
                    shelfWithBooks.push(book);
                }
                break;
            // print name of book at given index, if index is invalid ignore command 
            case 'Check Book':
                let index = Number(book);
                let bookAtIndex = shelfWithBooks[book];

                if (shelfWithBooks.includes(bookAtIndex)) {
                    if (index >= 0) {
                        console.log(bookAtIndex);
                    }
                }
                break;
        }
        initialCommand = books.shift();
    }




    console.log(shelfWithBooks.join(', '));

}

schoolLibrary((["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])

)