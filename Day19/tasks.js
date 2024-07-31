// Day 19: Regular Expressions
// Tasks/Activities:

// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const regex = /\bJavaScript\b/g;
const text = "JavaScript is fun. I am learning JavaScript. JavaScript is versatile.";

const matches = text.match(regex);

console.log(matches);

// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
const task2regex = /\d/g;
const task2text = "This is 1st country, has area of 45 thousand kms. 9";

const task2matches = task2text.match(task2regex);

console.log(task2matches);

// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const task3Regex = /\b[A-Z][a-z]*\b/g;
const task3Text = "This is a Test. Here are Some Words that Start with Capital Letters.";

const task3Matches = task3Text.match(task3Regex);

console.log(task3Matches);

// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const task4Regex = /\d+/g;
const task4Text = "There are 123 apples, 45 oranges, and 6789 bananas.";

const task4Matches = task4Text.match(task4Regex);

console.log(task4Matches);

// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const task5Regex = /\((\d{3})\) (\d{3})-(\d{4})/;
const task5Text = "The phone number is (122) 443-7890.";

const task5MatchResult = task5Text.match(task5Regex);

if (task5MatchResult) {
  const [, areaCode, centralOfficeCode, lineNumber] = task5MatchResult;
  console.log(`Area code: ${areaCode}`);
  console.log(`Central office code: ${centralOfficeCode}`);
  console.log(`Line number: ${lineNumber}`);
}

// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const task6Regex = /^(\w+)@([\w.]+)$/;
const task6Text = "kalpeshdhotre@hotmail.com";

const task6Matches = task6Text.match(task6Regex);

if (task6Matches) {
  const [, username, domain] = task6Matches;
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}

// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const task7Regex = /^\w+/;
const task7Text = "Hello world! This is a test.";

const task7Matches = task7Text.match(task7Regex);

console.log(task7Matches);

// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const task8Regex = /\bhello\b$/i;
const task8Text = "This is a test hello";

const task8Matches = task8Text.match(task8Regex);

console.log(task8Matches);

// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%^&*])[A-Za-z\d@!$%^&*]{8,}$/;
const password = "Pass$123";

const isValidPass = passwordRegex.test(password);

console.log(`Password: ${password} - Valid: ${isValidPass}`);

// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-\.~!$&'()*+,;=:@%]*)*$/i;
const url = "https://www.google.com";

const isValidUrl = urlRegex.test(url);

console.log(`URL: ${url} - Valid: ${isValidUrl}`);

// Feature Request:
// 1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
// 2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.
// 3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
// 4. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
// 5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
