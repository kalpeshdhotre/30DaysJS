/* Activity 5: Word Ladder
Task 5: Solve the "Word Ladder" problem on LeetCode.

Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word,such that only one letter can be changed at a time and each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases. */

function ladderLength(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]]; // [currentWord, level]

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    // If we reach the endWord, return the length of the sequence
    if (currentWord === endWord) return level;

    // Generate all possible transformations
    for (let i = 0; i < currentWord.length; i++) {
      for (let charCode = "a".charCodeAt(0); charCode <= "z".charCodeAt(0); charCode++) {
        const newChar = String.fromCharCode(charCode);
        if (newChar === currentWord[i]) continue; // Skip if the same character

        const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);
        if (wordSet.has(newWord)) {
          wordSet.delete(newWord); // Mark as visited
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0; // No possible transformation
}

// Example usage:
const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];

const beginWord2 = "hit";
const endWord2 = "cog";
const wordList2 = ["hot", "dot", "dog", "lot", "log"];

console.log(ladderLength(beginWord1, endWord1, wordList1)); // Output: 5
console.log(ladderLength(beginWord2, endWord2, wordList2)); // Output: 0
