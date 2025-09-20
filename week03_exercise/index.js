var http = require("http");
//TODO - Use Employee Module here
const Employee = require('./modules/Employee.js');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8082

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            //console.log("<h1>Welcome to Lab Exercise 03</h1>")
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Welcome to Lab Exercise 03!\n');
            
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employee = Employee.getAllEmployees();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(employee));
            //console.log(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const names = Employee.concatenate_first_last_name(Employee.getAllEmployees()).sort();
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(names));
           // console.log(JSON.stringify(names));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 } 
            const totalsalary =  Employee.CalculateTotalSalary(Employee.getAllEmployees());
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify(totalsalary));
            //console.log(JSON.stringify(totalsalary));
    }
    //res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
