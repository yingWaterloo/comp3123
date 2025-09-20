//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

function concatenate_first_last_name(e){
//loop through an array of employee object

    let array1 = [];
    let array2 = e;
    array1 = array2.reduce((accumulator, currentValue)=>{
        accumulator.push(currentValue.firstName + " " + currentValue.lastName);
        return accumulator;
    }, []);
    return array1;
}

function CalculateTotalSalary(e){
    let reducer = (accumulator, currentValue) => accumulator + currentValue.Salary;
    let totalSalary = 0;
    totalSalary =  e.reduce(reducer, 0);
    return totalSalary;

}

function getAllEmployees(){
    return employees;
}

module.exports = {
    getAllEmployees,
    concatenate_first_last_name:concatenate_first_last_name,
    CalculateTotalSalary:CalculateTotalSalary,
};