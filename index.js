// Write your solution in this file!


let employee = {
  name: 'Sam',
};

// Function to update an employee with a new key-value pair, returning a new object without modifying the original.
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

// Function to destructively update an employee with a new key-value pair and return the updated employee object.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a specific key from the employee object, returning a new object without the deleted key-value pair.
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}

// Function to destructively delete a specific key from the employee object and return the modified employee object.
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}