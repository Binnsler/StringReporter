var answer = prompt("Enter any word you would like:");

var answerLength=answer.length;
var answerThird=answer.charAt(2);
var answerLower=answer.toLowerCase();
var answerUpper=answer.toUpperCase();
var answerSentence=answer + " is the best.";
var answerSubword=answer.substring(1,3);

alert("Well, we ran some tests on your word, and this is what we found: "); 

console.log(answerLength, answerThird, answerLower, answerUpper, answerSentence, answerSubword);