const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 4); //add 4 to the longest string to account for the spaces and asterisks

  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length + 1)}*`);
  }
  console.log(border);
};

const repeat = function(str, times) {
  let result = ''; //changed from let result = str; because it was repeating the first letter of the string

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function(list) {
  let longest = list[0]; //needed a default value to compare the strings to

  for (const str of list) {
    if (str.length > longest.length) {  //add the if statement to check if the current string is longer than the longest string
      longest = str;
    }
  }

  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
