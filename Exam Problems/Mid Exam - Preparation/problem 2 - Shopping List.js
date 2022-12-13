function shoppingList(input) {

    let shoppingList = input.shift().split('!');

    let initialCommand = input.shift();

    while (initialCommand !== 'Go Shopping!') {

        let currentCommand = initialCommand.split(' ');
        let action = currentCommand[0];
        let item = currentCommand[1];
        let newItem = currentCommand[2];

        switch (action) {

            case 'Urgent':
                if (!shoppingList.includes(item)) {
                    shoppingList.unshift(item);
                }
                break;

            case 'Unnecessary':
                if (shoppingList.includes(item)) {
                    let itemIndex = shoppingList.indexOf(item);
                    shoppingList.splice(itemIndex, 1);
                }
                break;

            case 'Correct':
                if (shoppingList.includes(item)) {
                    let itemIndex = shoppingList.indexOf(item);
                    shoppingList.splice(itemIndex, 1, newItem);
                }
                break;

            case 'Rearrange':
                if (shoppingList.includes(item)) {
                    let itemIndex = shoppingList.indexOf(item);
                    shoppingList.splice(itemIndex, 1);
                    shoppingList.push(item);
                }
                break;

        }

        initialCommand = input.shift();
    }

    console.log(shoppingList.join(', '));


}


shoppingList((["Onion!Jam!Potatoes!Ham!Milk", "Unnecessary Milk", "Rearrange Jam", "Urgent Tomatoes", "Correct Bread Ham", "Go Shopping!"]));