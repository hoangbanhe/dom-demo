var $ = function (id) {
  return document.getElementById(id);
};

var employees = [];

var Employee = function (firstName, lastName, age, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.salary = salary;
};

Employee.prototype.calBirthday = function () {
  var today = new Date();
  var birthday = new Date(
    today.getFullYear() - this.age,
    today.getMonth(),
    today.getDate()
  );
  return `${birthday.getFullYear()}-${
    birthday.getMonth() + 1
  }-${birthday.getDate()}`;
};

Employee.prototype.calLengthOfFullName = function () {
  return (this.firstName + this.lastName).length;
};

function getFormValue() {
  return {
    firstName: $("firstName").value,
    lastName: $("lastName").value,
    age: $("age").value,
    salary: $("salary").value,
  };
}

function handlerSubmit(event) {
  event.preventDefault();
  var formValue = getFormValue();
  var employee = new Employee(
    formValue.firstName,
    formValue.lastName,
    formValue.age,
    formValue.salary
  );
  employees.push(employee);
  sortEmployees("asc");
  console.log(employees);
  insertRowToTable(employee);
}

function sortEmployees(direction) {
  if (direction == "asc") {
    employees.sort(function (preEmployee, nextEmployee) {
      var preEmployeeDateOfBirth = new Date(preEmployee.calBirthday());
      var nextEmployeeDateOfBirth = new Date(nextEmployee.calBirthday());
      return nextEmployeeDateOfBirth - preEmployeeDateOfBirth;
    });
  } else {
    employees.sort(function (preEmployee, nextEmployee) {
      return (
        preEmployee.calLengthOfFullName() - nextEmployee.calLengthOfFullName()
      );
    });
  }
}

function insertRowToTable(employee) {
  var employeeTable = $("employees");
  var currentRow = employeeTable.insertRow();
  for (var emp in employee) {
    var currentCell = currentRow.insertCell();
    if (typeof employee[emp] !== "function") {
      currentCell.innerHTML = employee[emp];
    } else {
      currentCell.innerHTML = employee[emp]();
    }
  }
}

window.onload = function () {
  $("employee-form").onsubmit = handlerSubmit;
};
