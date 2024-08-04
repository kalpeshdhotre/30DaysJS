// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the 'Longest Substring Without Repeating Characters" problem on LeetCode.
// o Write a function that takes a string and returns the length of the longest substring without repeating characters.
// o Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
  let charMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
      left = charMap.get(s[right]) + 1;
    }

    charMap.set(s[right], right);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
