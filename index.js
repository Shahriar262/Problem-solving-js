// Problem 1 : Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseString("hello"));



// Problem 2 : Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("programming"));



// Problem 3 : Check for Palindrome
function checkPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("hello"));



// Problem 4 : Find the Maximum Number
function findMaximum(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

// console.log(findMaximum([5, 1, 9, 3]));



// Problem 5 :  Remove Duplicates from an Array
function removeDuplicateValue(arr) {
  let uniqueValue = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValue.includes(arr[i])) {
      uniqueValue.push(arr[i]);
    }
  }
  return uniqueValue;
}

// console.log(removeDuplicateValue([1, 2, 2, 3, 4, 4]));



// Problem 6 : Sum of All Numbers in Array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumOfArray([1, 2, 3, 4]));



// Problem 7 : Find Even Numbers in an Array
function findEvenNums(arr) {
  let evenNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
}

// console.log(findEvenNums([1, 2, 3, 4, 5, 6]));



// Problem 8 : Capitalize First Letter of Each Word
function capitalFirstLetter(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

// console.log(capitalFirstLetter("hello world"));



// Problem 9 : Find the Factorial of a Number
function factorialNumber(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorialNumber(5));



// Problem 10 : PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
// pingPong();
