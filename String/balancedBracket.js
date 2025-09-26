/*
Problem: Valid Parentheses
Category: String 

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

Sample Input
{[()]}
{[(])}
{{[[(())]]}}

-----

*** Approach ***

1. Stack: O(N)
    - steps: Using push and pop to keep track of valid pairs. 

-----

input: string of open/close brackets 
output: YES/NO
goal: check to see if all open brackets has a closing matching counterpart in the correct order 
constraints:
    - str.len < 2 return NO 
    - {}() return YES
    - {[]} return YES 

*/

const isValid = (s) => {
  if (s.length < 2) return 'NO'; // base case

  let stack = [];

  // hash up lookup
  const hash = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let i of s) {
    if (hash[i]) {
      stack.push(hash[i]); // add open bracket
    } else {
      // closing bracket should be a matching pair with last open bracket on stack
      if (i !== stack.pop()) return 'NO';
    }
  }
  return 'YES';
};

console.log(isValid('{[()]}'));
console.log(isValid('{[(]]}'));
