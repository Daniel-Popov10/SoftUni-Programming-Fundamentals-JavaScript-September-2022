function gameAccount(commands) {
    let gamingAccount = commands.shift().split(' ');

    let firstCommand = commands.shift();

    while (firstCommand !== 'Play!') {
        let currentRow = firstCommand.split(' ');
        let command = currentRow[0];
        let game = currentRow[1];
        let indexOfCurrentGame = gamingAccount.indexOf(game);

        switch (command) {
            case 'Install':
                if (!gamingAccount.includes(game)) {
                    gamingAccount.push(game);
                }
                break;
            case 'Uninstall':
                if (gamingAccount.includes(game)) {
                    gamingAccount.splice(indexOfCurrentGame, 1);
                }
                break;
            case 'Update':
                if (gamingAccount.includes(game)) {
                    gamingAccount.splice(indexOfCurrentGame, 1);
                    gamingAccount.push(game);
                }
                break;
            case 'Expansion':
                let gameAndXpac = game.split('-');
                let currentGame = gameAndXpac[0];
                let xpac = gameAndXpac[1];
                let indexOfGame = gamingAccount.indexOf(currentGame);
                if (gamingAccount.includes(currentGame)) {
                    gamingAccount.splice(indexOfGame + 1, 0, `${currentGame}:${xpac}`);
                }

                break;
        }


        firstCommand = commands.shift();
    }


    console.log(gamingAccount.join(' '));

}

gameAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

);