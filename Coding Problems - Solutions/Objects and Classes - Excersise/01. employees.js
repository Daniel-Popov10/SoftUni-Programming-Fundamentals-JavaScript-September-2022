function assignNumber(list) {

    let employeeList = {};

    list.forEach(employee => {
        let idNumber = employee.length;
        employeeList.name = employee;
        employeeList.id = idNumber;
        console.log(`Name: ${employeeList.name} -- Personal Number: ${employeeList.id}`);
    });

}

assignNumber(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);