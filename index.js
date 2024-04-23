function reverse(str) {
    // Reverse the string and return the reversed string.
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray
  }
  
  module.exports = { reverse };

  console.log(reverse("hello"));
