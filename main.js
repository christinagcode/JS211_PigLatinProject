'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // Your code here

let newWord = word.toLowerCase().trim()

let firstVowel = function (newWord) {
  let aIdx = newWord.indexOf("a");
  let eIdx = newWord.indexOf("e");
  let iIdx = newWord.indexOf("i");
  let oIdx = newWord.indexOf("o");
  let uIdx = newWord.indexOf("u");

  let response = -1;

  if (aIdx == -1) {
  } else if (aIdx != -1) {
    response = aIdx
  }

  if (eIdx == -1) {
  } else if (eIdx != -1 && response == -1){
    response = eIdx
  } else if (eIdx != -1 && response > eIdx) {
    response = eIdx
  }

  if  (iIdx == -1) {
  } else if (iIdx != -1 && response == -1) {
      response = iIdx
    } else if (iIdx != -1 && response > iIdx) {
      response = iIdx
    }

  if (oIdx == -1) {   
  } else if (oIdx != -1 && response == -1) {
    response = oIdx
  } else if (oIdx != -1 && response > oIdx) {
    response = oIdx
  }

  if (uIdx == -1) {
  } else if (uIdx != -1 && response == -1) {
    response = uIdx 
  } else if (uIdx != -1 && response == -1) {
    response = uIdx 
  }
    return response
  }
  
  let nW = newWord
  let fV = firstVowel(newWord)

  if (position == 0) {
    nW = newWord + "yay"
    return nW
  } else if (position == -1) {
    nW = newWord + "ay"
    return nW
  } else if (position > 0) {
    let part1 = newWord.substring(0, position)
    let part2 = newWord.substring(position)
    nW = part2 + part1 + "ay"
    return nW
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
