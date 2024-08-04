// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// o Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// o Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    // Ensure nums1 is the smaller array
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0;
  let high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2); // Partition for nums1
    const j = Math.floor((m + n + 1) / 2) - i; // Partition for nums2

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];

    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // Correct partitioning
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      // Move `i` to the left
      high = i - 1;
    } else {
      // Move `i` to the right
      low = i + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

// Example usage:
const nums1_1 = [1, 3];
const nums2_1 = [2];
const nums1_2 = [1, 2];
const nums2_2 = [3, 4];
const nums1_3 = [0, 0];
const nums2_3 = [0, 0];

console.log(findMedianSortedArrays(nums1_1, nums2_1)); // Output: 2.0
console.log(findMedianSortedArrays(nums1_2, nums2_2)); // Output: 2.5
console.log(findMedianSortedArrays(nums1_3, nums2_3)); // Output: 0.0
