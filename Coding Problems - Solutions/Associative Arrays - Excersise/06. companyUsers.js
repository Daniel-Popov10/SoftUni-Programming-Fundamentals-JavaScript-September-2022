function companyUsers(input) {
    let companies = {};

    for (const line of input) {
        let [companyName, employeeId] = line.split(' -> ');

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        companies[companyName].push(employeeId);

    }

    let sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(element => {
        let [companyName, allIds] = element;

        let uniqueIds = new Set(allIds);
        console.log(companyName);
        uniqueIds.forEach(element => {
            console.log(`-- ${element}`);
        });
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);