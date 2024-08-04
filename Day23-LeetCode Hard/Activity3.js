/* Activity 3: Trapping Rain Water
• Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
Log the amount of trapped water for a few test cases.  */

function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const heights2 = [4, 2, 0, 3, 2, 5];
const heights3 = [1, 0, 1, 0, 1];

console.log(trap(heights1));
console.log(trap(heights2));
console.log(trap(heights3));
