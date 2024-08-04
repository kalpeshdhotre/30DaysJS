// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// o Write a function that takes an array of strings and groups anagrams together.
// o Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to get the anagram key
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is not in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Add the original string to the map entry
    map.get(sortedStr).push(str);
  }

  // Return the values of the map, which are the grouped anagrams
  return Array.from(map.values());
}

// Example usage:
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = ["", ""];
const strs3 = ["a"];

console.log(groupAnagrams(strs1)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams(strs2)); // Output: [["",""]]
console.log(groupAnagrams(strs3)); // Output: [["a"]]
