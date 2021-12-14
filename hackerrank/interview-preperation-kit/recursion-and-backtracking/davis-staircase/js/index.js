// staircase has 5 steps
// climb 1,2 or 3 steps at a time

// 1 => 1 => 1
// 2 => 1,1 - 2 => 2
// 3 => 1,1,1 - 1,2 - 2,1 - 3 => 4
// 4 => 1,1,1,1 - 2,1,1 - 1,2,1 - 1,1,2 - 3,1 - 1,3 - ***(2,2) => 7
// 5 => 13

// Method 1: Recursive

// Bad Time Complexity - Recursive
const stepPerms = n => {
  if (n === 1 || n === 2) return n
  if (n === 3) return 4
  return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)
}

const stepPermsGeeksForGeeks = n => {
  if (n == 0) return 1
  else if (n < 0) return 0
  else
    return (
      stepPermsGeeksForGeeks(n - 3) +
      stepPermsGeeksForGeeks(n - 2) +
      stepPermsGeeksForGeeks(n - 1)
    )
}

console.log(stepPerms(7)) // 44

console.log(stepPermsGeeksForGeeks(7)) // 44

/**
 * Complexity Analysis:
 *
 * Time Complexity: O(3n).
 *  - The time complexity of the above solution is exponential, a close upper bound will be O(3n). From each state, 3 recursive function are called. So the upperbound for n states is O(3n).
 * Space Complexity: O(1).
 *  - As no extra space is required.
 */

// Method 2: Dynamic Programming

const stepPermsWithDynamicProgramming = n => {
  let res = new Array(n + 2)
  res[0] = 1
  res[1] = 1
  res[2] = 2

  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2] + res[i - 3]
  }

  return res[n]
}

console.log(stepPermsWithDynamicProgramming(7)) // 44

/**
 * Complexity Analysis:
 *
 * Time Complexity: O(n).
 *  - Only one traversal of the array is needed. So Time Complexity is O(n).
 * Space Complexity: O(n).
 *  - To store the values in a DP, n extra space is needed.
 */

// Method 3: Matrix Exponentiation (O(logn) Approach)
