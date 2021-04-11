function validParentheses(parens){
  

  return parens.search("()");
}

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

console.log(validParentheses(")(()))"));
// console.log(validParentheses(")(()))"));
// console.log(result);
// const result = ")(()))".search("()");
