const reverseString = function(str) {
    let splitStr = str.split(''); 
    let reversed = splitStr.reverse(); 
    let finalReverse = reversed.join(''); 
    return finalReverse; 
}; 


console.log(reverseString('')); 


// Do not edit below this line
module.exports = reverseString;
