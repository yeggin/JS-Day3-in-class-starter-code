const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION
// function Employee(firstName, lastName, email, birthdate, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.birthdate = birthdate;
//     this.salary = salary;
//   }

//   Employee.addEmployee = function(firstName, lastName, email, birthdate, salary) {
//     return new Employee(firstName, lastName, email, birthdate, salary);
//   };

//   Employee.prototype.editEmployee = function(updates) {
//     Object.assign(this, updates);
//   };

//   // Usage example:
//   const bill = Employee.addEmployee("Bill", "Doe", "bill@example.com", "1990-01-01", 50000);
//   console.log(bill);

//   bill.editEmployee({ salary: 7777777, email: "xxxxxxx@example.com" });
//   console.log(bill);


//ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
// Goals:
// 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

// Step 1
class Employee {
  constructor(firstName, lastName, email, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthdate = birthdate;
  }

  // Step 5
  getEmployee() {
    return {
      firstName: this.firstName, 
      lastName: this.lastName, 
      email: this.email, 
      birthdate: this.birthdate};
  }

  static addEmployee(firstName, lastName, email, birthdate) {
    return new Employee(firstName, lastName, email, birthdate);
  }

  editEmployee(property, newValue) {
    if (property === "firstName") {
      this.firstName = newValue;
    } else if (property === "lastName") {
      this.lastName = newValue;
    } else if (property === "email") {
      this.email = newValue;
    } else if (property === "birthdate") {
      this.birthdate = newValue;
    } else {
        console.error(`Property "${property}" does not exist on Employee.`);
      }
    }
  }


  // Testing addEmployee
Employee.addEmployee("Sean","Kim", "sean@gmail.com", "1999-10-10"); 
console.log(Employee.addEmployee("Sean","Kim", "sean@gmail.com", "1999-10-10")); 
  

// Step 2
const jo = new Employee("Jo", "Kim", "jyk637@utexas.edu", "2003-10-21");

  // Testing getEmployee
let x = jo.getEmployee();

console.log(x);

// Step 3
console.log(jo);
console.log(jo.firstName);
console.log(jo.email);

// Step 4
const employees = [
  Employee.addEmployee("Adam", "To", "example@mail.com", "1999-12-12"),
  Employee.addEmployee("Heather", "Min", "hermail@mail.com", "1992-09-09"),
  Employee.addEmployee("Dana", "Kim", "diane@gmail.com", "2004-05-15"),
  Employee.addEmployee("Amy", "Lee", "amylee@gmail.com", "1970-05-31")
]

console.log(employees);

// Step 6
const tableBody = document.getElementById("employeeTable").querySelector("tbody");
tableBody.innerHTML = '';


employees.forEach (employee => {
  const empInfo = employee.getEmployee();
  const row = document.createElement('tr');

  row.innerHTML = `
  <td>${empInfo.firstName}</td>
  <td>${empInfo.lastName}</td>
  <td>${empInfo.email}</td>
  <td>${empInfo.birthdate}</td>
  `

  tableBody.appendChild(row);
  
})






//Try to output 3 instances of your class object into the table

