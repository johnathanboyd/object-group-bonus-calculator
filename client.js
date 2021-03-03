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

 function rating (employee){
    // loop through employee objects
    for (let i = 0; i < employee.length; i++) {
      let bBonus = callFunction(employee[i]);
      console.log(bBonus);
    }

    function callFunction(array){
      let object = {name: '', bonusPercentage: 0, totalCompensation: 0, totalBonus: 0};
      object.name = array.name;

      if (employee.reviewRating <= 2){
        object.totalBonus = 0;
      }
      else if (employee.reviewRating === 3){
        object.totalBonus = array.annualSalary * .04;
      }
      else if (employee.reviewRating === 4){
        object.totalBonus = array.annualSalary * .06;
      }
      else if (employee.reviewRating === 5){
        object.totalBonus = array.annualSalary * .1;
      }
      // if employee has 4 digit employee number add 5% bonus
      if (array.employeeNumber > 999 && array.employeeNumber < 10000){
        object.totalBonus += object.totalBonus * .05;
      }
      // if income is greater than $65k adjust bonus down 1%
      if 
      // no bonus can be above 13% or below 0%
    }
      /*if (employee.reviewRating <= 2) {
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

console.log(rating( employees ));*/

// test function
// aim to loop through and pinpoint desired value.
//function display (person){
  for (let i=0; i < person.length; i++){
  console.log(`${employees[i].employeeNumber}`);
  console.log(`${employees[i].annualSalary}`);
  console.log(`${employees[i].reviewRating}`);
  };
}

display(employees);//