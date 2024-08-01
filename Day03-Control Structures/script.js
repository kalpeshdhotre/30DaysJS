// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
function checkNumber(number) {
  if (number > 0) console.log(`Positive`);
  else if (number < 0) console.log(`Negative`);
  else console.log(`Zero`);
}
checkNumber();

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
function checkVotingEligibility(age) {
  if (age >= 18) console.log(`You are eligibile`);
  else console.log(`You are not eligible`);
}
checkVotingEligibility(30);

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function displayDay(number) {
  switch (number) {
    case 1:
      console.log(`MON`);
      break;
    case 2:
      console.log(`TUE`);
      break;
    case 3:
      console.log(`WED`);
      break;
    case 4:
      console.log(`THU`);
      break;
    case 5:
      console.log(`FRI`);
      break;
    case 6:
      console.log(`SAT`);
      break;
    case 7:
      console.log(`SUN`);
      break;
    default:
      console.log(`Invalid Number`);

      break;
  }
}
displayDay(43);

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// below 35
// 35-55
// 56-70
// 71-85
// 86-100

function grade(marks) {
  switch (true) {
    case marks < 35:
      console.log(`F`);
      break;
    case marks >= 35 && marks <= 55:
      console.log(`D`);
      break;
    case marks >= 56 && marks <= 70:
      console.log(`C`);
      break;
    case marks >= 71 && marks <= 85:
      console.log(`B`);
      break;
    case marks >= 86 && marks <= 100:
      console.log(`A`);
      break;
    default:
      console.log(`Invalid Input`);
      break;
  }
}

grade(99);

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// (divisible by 4, but not 100 unless also divisible by 400)

function checkLeapYear(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) console.log("LEAP");
  else console.log("Not LEAP");
}

checkLeapYear(2104);
