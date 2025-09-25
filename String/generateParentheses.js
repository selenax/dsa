/*
Problem: Generate Parentheses
Category: String 

Generate all strings of n parentheses (not necessarily balanced)
Example: n = 2; output: ["((", "()", ")(", "))"]

-----

*** Approaches ***

1. Backtrack 

*/

const genAllParens = (n) => {
  const res = [];
  const path = [];

  const backtrack = () => {
    if (path.length === 2 * n) {
      res.push(path.join(''));
      return;
    }
    path.push('(');
    backtrack();
    path.pop();
    path.push(')');
    backtrack();
    path.pop();
  };

  backtrack();
  return res;
};
