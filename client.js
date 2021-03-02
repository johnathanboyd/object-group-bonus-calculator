const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
 let bonusPercentage = 0;
 let totalBonus = 0;
 let totalCompensation = totalBonus + employees.annualSalary;
 

 function rating (employee){
    // loop through employee objects
    for (let i = 0; i < employee.length; i++) {
      
      if (employee.reviewRating <= 2) {
        totalBonus = 0;
        return totalBonus;
      }
      else if (employee.reviewRating = 3){
        totalBonus = employee.annualSalary * .04;
        console.log(totalBonus);
        return totalBonus;
      }
      else if (employee.reviewRating = 4){
        totalBonus = employee.annualSalary * .06;
        console.log(totalBonus);
        return totalBonus;
      }
      else if (employee.reviewRating = 5){
        totalBonus = employee.annualSalary * .10;
        console.log(totalBonus);
        return totalBonus;
      }
      else {
        return 'what is this?';
      }
    }
  };  
console.log( employees );

console.log(rating( employees ));

// test function
// aim to loop through and pinpoint desired value.
function display (person){
  for (let i=0; i < person.length; i++){
  console.log(`${employees[i].employeeNumber}`)
  };
}

display(employees);