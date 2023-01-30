// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

var wordPattern = function(pattern, s) {

  let word = s.split(" ")
  for(i=0;i<pattern.length; i++)
  {
    console.log(pattern[i]);
    console.log(word[i]);
    
  }
    
};

let pattern = 'abba'
let s = "dog cat cat dog"
wordPattern(pattern, s)