// Activity 4: 3Sum
// • Task 4: Solve the "3Sum" problem on LeetCode.
// o Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// o Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
        left++;
        right--;
      } else if (sum < 0) {
        left++; // Move the left pointer to the right to increase the sum
      } else {
        right--; // Move the right pointer to the left to decrease the sum
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1,-1,2],[-1,0,1]]
