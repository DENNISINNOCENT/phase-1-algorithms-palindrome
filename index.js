function isPalindrome(word) {
  // Write your algorithm here
  //create a variable
  //Take the string split it,reverse it and join it
  //compare if the string provided is the same as returned
  //use the condtional statements

  let reverse =word.split("").reverse("").join('')
  if(word ===reverse){
    return true
  }
  else{
    return false
  }
}
  console.log(isPalindrome("a"))



/* 
  Add your pseudocode here
*/
//input===output ->true
//input===!output ->false

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
