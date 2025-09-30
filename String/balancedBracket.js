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

1. Input: String
2. Output: YES/NO
3. Goal: Given string of only ()[]{}, decide if brackets are balanced 
4. Edge: 
    - odd length: return NO 
    - empty: return yes 

Steps:
Use a stack to track expected closing brackets
Push matching closing bracket whenever we see an opening
When we see a closing bracket, it must match the top of stack
If mismatch or stack empty at wrong time → invalid
After iteration, stack must be empty for string to be valid

Time: O(N)
Space: O(N)
*/

const isValid = (s) => {
  // if odd len return no
  // init empty stack
  // for each char in s
  //     if char is opening
  //         push its expected closing onto stack
  //     else (char is closing)
  //         stack is empty or stack.pop() !== char return NO
  // after loop
  //     stack len empty return YES
  //     else return NO

  if (s.length % 2 == 1) return 'NO'; // odd length

  let stack = [];

  // hash map lookup
  const hashMap = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let char of s) {
    if (hashMap[char]) {
      stack.push(hashMap[char]);
    } else {
      if (!stack.length || stack.pop() !== char) return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
};

console.log(isValid('{[()]}'));
console.log(isValid('{[(]]}'));
console.log(isValid(''));
console.log(isValid('()[]'));
