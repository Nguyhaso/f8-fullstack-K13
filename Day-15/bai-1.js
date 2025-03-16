const companies = [
    {id: 1, name: "Tech Corp"},
    {id: 2, name: "Finance Inc"},
    {id: 3, name: "Health Plus"}
];

const employees = [
    {name: "Alice", companyId: 1, salary: 15000000},
    {name: "Bob", companyId: 1, salary: 18000000},
    {name: "Charlie", companyId: 2, salary: 22000000},
    {name: "David", companyId: 2, salary: 20000000},
    {name: "Eve", companyId: 3, salary: 25000000}
];

/*



                             companies = [company, company, company]
                             employees = [employee, employee, employee]
                                    │
                                    │
                                    ▼
                   //filter      employee.companyId === company.Id ?
                                    │
                                    │
                                    │  yes
                                    │
                                    │
                                    ▼
                               create array employeesList ──────────────────────────────────┐
                                    │                                                       │
                                    │                                                       │
                                    │                                                       │
                                    │                                                       │
                                    │                                                       │
                                    ▼                                                       │
                              totalSalary += employeesList.salary                           │
                                                                                            │
           ┌───────────────── averageSalary = totalSalary / employeesList.salary.length      │
           │                                                                                │
           │                                                                                │
           │                                                                                │
           │       //map     companies.map(company())                                       │
           │                                                                                │
           │                 return    company.name                                         │
           │                                                                                │
           │                                                                                │
           │                           employeesList ◄──────────────────────────────────────┘
           │
           └─────────────────────────► averageSalary






 */
const companiesAndEmployees = companies.map(company => {
    const employeesList = employees
        .filter(employee => employee.companyId === company.id)
        .map(employee => ({name: employee.name, salary: employee.salary}));
    let totalSalary = 0
    employeesList.forEach(employee => {
        totalSalary += employee.salary;
    })
    let averageSalary = totalSalary / employeesList.length;
    return {
        company: company.name,
        employees: employeesList,
        averageSalary: averageSalary
    }
})

console.log(companiesAndEmployees);