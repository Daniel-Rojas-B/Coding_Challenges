// Remove blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks. 

function removeBlanks(string) {
    let newString = '';
    for (let i = 0; i<string.length; i++) {
                
        if (string[i]!==' ') {
            newString+=string[i];
        }
    }
    return newString;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

// Get Digits: Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

function getDigits(string) {
    let newString = '';
    for (let i = 0;i<string.length;i++){
        if(!isNaN(string[i])){
            newString+=string[i];
        }
    }
    return newString;
}

console.log(getDigits("abc8c0d1ngd0j0!8")) 
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function acronym(string) {
    let arrayWords = string.split(" ");
    let acronym = '';
    for (let i = 0; i<arrayWords.length;i++) {
        acronym+=arrayWords[i][0];
    }
    // console.log(arrayWords);
    let upperCaseAcronym = acronym.toUpperCase();
    return upperCaseAcronym;
}


console.log(acronym("there's no free lunch - gotta pay yer way.")) 

console.log(acronym("Live from New York, it's Saturday Night!"))

// Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaces(string) {
    let counter = 0;
    for (let i = 0;i<string.length;i++){
        if (string[i]!=' ') {
            counter+=1;
        }
    }
    return counter;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy")) 
console.log(countNonSpaces("Hello world !"))

// Remove Shorter Strings: Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(array,value){
    let newArray = [];
    for (let i = 0; i<array.length;i++){
        if(array[i].length>=value) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))