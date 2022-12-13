function report(input) {
    let distributors = {}
    let clients = {}
    let totalMoneyFromClients = 0;

    let line = input.shift();

    while (line !== 'End') {
        let [command, ...arguments] = line.split(' ');

        switch (command) {
            case 'Deliver':
                let distributorName = arguments[0];
                let moneySpent = Number(arguments[1]);

                if (!distributors.hasOwnProperty(distributorName)) {
                    distributors[distributorName] = {
                        name: distributorName,
                        money: Number(moneySpent)
                    }
                } else {
                    distributors[distributorName].money += moneySpent;
                }
                break;
            case 'Return':
                let distrName = arguments[0];
                let moneyReturned = Number(arguments[1]);

                if (distributors.hasOwnProperty(distrName)) {
                    if (!distributors[distrName].money < moneyReturned) {
                        if (distributors[distrName].money === 0) {
                            delete distributors[distrName];
                        } else {
                            distributors[distrName].money -= moneyReturned;
                        }
                    }
                }
                break;
            case 'Sell':
                let clientName = arguments[0];
                let moneyEarned = Number(arguments[1]);

                if (!clients.hasOwnProperty(clientName)) {
                    clients[clientName] = {
                        name: clientName,
                        money: Number(moneyEarned),
                    }
                    totalMoneyFromClients += moneyEarned;
                } else {
                    clients[clientName].money += moneyEarned;
                    totalMoneyFromClients += moneyEarned;
                }
                break;

        }
        line = input.shift();
    }

    for (const client in clients) {
        console.log(`${client}: ${clients[client].money.toFixed(2)}`);
    }

    console.log('-----------');
    for (const distributor in distributors) {
        console.log(`${distributor}: ${distributors[distributor].money.toFixed(2)}`);
    }
    console.log('-----------');
    console.log(`Total Income: ${totalMoneyFromClients.toFixed(2)}`);

}


report(["Deliver North 200.30",
    "Return North 200.30",
    "Deliver Micro 10000.00",
    "Deliver North 150.50",
    "End"])
