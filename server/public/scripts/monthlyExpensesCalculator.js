// ====================================================================
// # Weekend Challenge 1 - Salary Calculator:
// Create an application that records employee salaries and adds
// salaries up to report monthly costs.
// ====================================================================
//
// ## Topics Covered:
// - JavaScript
// - jQuery - Selectors, append, and event handling
// ====================================================================
//
// ## Assignment:
// The application should have an input form that collects
// Employee Data
//  - first name
//  - last name
//  - ID number
//  - job title
//  - annual salary
//
// A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the
// DOM and clear the input fields. Using the stored information,
// calculate monthly costs and append this to the to DOM.
// ====================================================================

//needed:
//DONE - input textboxes (first name, last name, ID number, job title & annual salary)
//DONE - submit button (this will need an ID for on click)
//on click will need to collect data, store info, append info on the DOM,
//clear input textboxes, calculate monthly cost & append monthly cost to DOM
console.log('js');
//employee data - object

//employees - array
var employees = [];
//monthlyExpense variable
var monthlyExpenses;

$(document).ready( function(){
  // console.log('jq is ready');
  $('#expenseCalcBtn').on( 'click', function(){
    // console.log('in expenseCalcBtn on click');
    // get user input
    //create new employeeData object
    var employeeDataObject = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      idNumber: $('#idNumber').val(),
      jobTitle: $('#jobTitle').val(),
      annualSalary: $('#annualSalary').val()
    };//end employeeData object
    console.log('adding:',employeeDataObject);
    //push to employee object array
    employees.push(employeeDataObject);
    //display on the DOM
    displayEmployees();
    displayMonthlyExpenses();
  });
});

//start displayEmployees function
function displayEmployees(){
  // console.log('in displayEmployees');
  //add to the DOM in the ul element in the array
  var employeeOutput = $('#employeeDataID');
  //need to empty the ul
  employeeOutput.empty();
  //loop through the employees array
  for (var i = 0; i < employees.length; i++) {
    //these need to be appended to the ul element
    //local variable to store the append data
    var employeeStringData = '<li>';
    employeeStringData += '<strong>First Name:</strong> ' + employees[i].firstName + ' ';
    employeeStringData += '<strong>Last Name:</strong> ' + employees[i].lastName+' ';
    employeeStringData += '<strong>ID Number:</strong> ' + employees[i].idNumber+' ';
    employeeStringData += '<strong>Job Title:</strong> ' + employees[i].jobTitle+' ';
    employeeStringData += '<strong>Annual Salary:</strong> ' + employees[i].annualSalary+' ';
    employeeStringData += ' <button id="removeEmployee" data-annualSalary="' + employees[i].annualSalary + '">Remove Employee</button></li>';
    employeeStringData += '</li>';
    employeeOutput.append(employeeStringData);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
  }
}

//start displayMonthlyExpenses function
function displayMonthlyExpenses(){
  // console.log('in displayMonthlyExpenses');
  //add to the DOM in the ul element in the array
  //need to empty the ul
  $('#monthlyExpenseDataID').empty();
  monthlyExpenses = 0;//setting this to 0 so that when it loops through it doesnt double the amount
    //for loop to pull annual salaries and divide out by 12
  for (var i = 0; i < employees.length; i++) {
    monthlyExpenses += Number(employees[i].annualSalary)/12;
    var stringMonthlyExpenses = monthlyExpenses.toString();
    //append monthlyExpensesDataString
    $('#monthlyExpenseDataID').html('$'+stringMonthlyExpenses);
    // console.log(monthlyExpensesDataString);
    console.log(monthlyExpenses);
  }
}
