// Activity 3: Container With Most Water
// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
//   Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point.
//   Find two lines that together with the x-axis form a container, such that the container holds the most water.

//   Log the maximum amount of water for a few test cases.
function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7, 10, 1, 11];
console.log(maxArea(height));
