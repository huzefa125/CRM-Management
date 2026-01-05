

function revString(Str){
    let result = "";
    for(let i =Str.length; i >= 0;i--){
        result = result + Str[i];
    }
    return result;
}

// console.log(revString("Hello"));
 let result = [2,3,4,5,6,7,8,9];

function EvenFromArray(arr){
    let even = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i] % 2=== 0){
            continue;
        }else{
            even.push(arr[i]);
        }
    }
    return even;
}

let array = [1,2,3,4,5,6,7,8,9,1,2,3,4,5];
function oodfromArray(arr){
    let odd = [];
    for(let i =0; i < arr.length;i++){
        if(arr[i] % 2 === 0){
            continue;
        }else{
            odd.push(arr[i]);
        }
    }
    return odd;
}
// console.log(oodfromArray(array));


// console.log(EvenFromArray(result));
function removeDuplicate(arr){
    return [...new Set(arr)];
}

function removeDuplicates(arr){
    return [...new Set(arr)]
}
// console.log(removeDuplicates(array));


// console.log(removeDuplicate(array));

let max = [10,23,45,67,89,90,34,23,12];

function findMax(arr){
    let maximum = arr[0];
    for(let i = 1; i < arr.length;i++){
        if(arr[i] > maximum){
            maximum = arr[i];
        }
    }
    return maximum;
}
function findMax(arr){
    let maximum = arr[0];
    for(let i =0; i < arr.length; i++){
        if(arr[i] > maximum){
            maximum = arr[i];
        }
    }
    return maximum;
}
// console.log(findMax(max));

let vowels = ['a','e','i','o','u','A','E','I','O','U'];

function countVowels(str){
    let count = 0;
    for(let i =0; i< str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }else{
            continue;
        }
    }
    return count;
}

function countsVowels(str){
    let count = 0;
    for(let i =0; i< str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }else{
            countinue;
        }
    }
    return count;
}
console.log(countsVowels(vowels));


// console.log(countVowels("Javascript is a programming language"));

let palidromeStr = "madam";

function revString(string){
    let result = "";
    for(let i = string.length - 1; i >= 0; i--){
        result = result + string[i];
    }
    return result;
}

function isPalidrome(str){
    let revStr = revString(str);
    return revStr === str;
}

function revString(string){
    let reversed = "";
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
}

function isPalidrome(str){
    let reversedStr = revString(str);
    return reversedStr === str;
}

console.log(isPalidrome("madam"));

let count = ["apple","banana","apple","orange","banana","apple"];

function countOccurrences(arr){
    let count = {};
    for(let i = 0; i < arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]++;
        }else{
            count[arr[i]] = 1;
        }
    }
    return count;
}

console.log(countOccurrences(count));

let fibiNumbea = 400;

function fibiNumber(n){
    let a = 0, b = 1;
    let result = [];
    for(let i = 0; i< n; i++){
        result.push(a);
        let next = a +b;
        a= b;
        b = next;
    }
    return result;
}

// console.log(fibiNumber(30));