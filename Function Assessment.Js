function firstLetterName (name) {alert ("The name " +name +" starts with the letter " +name[0])}
firstLetterName ("Annabell")

function divisibleByTwo (number) {
    if(number % 2 == 0){ console.log("This number " +number +" is divisible by 2: ", true)
    return true}
    else { console.log("This number " +number +" is divisible by 2: ", false)
    return false}
}

function largestNum (arr){
let largestNum= arr[0];
for(let i = 1; i< arr.length; i++){
    if (arr[i] > largestNum) {
        largestNum = arr[i]
    }
}
return largestNum;
}
divisibleByTwo (22);
divisibleByTwo (33);
console.log (largestNum ([1,2,234,23,422,522]));