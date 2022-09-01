// const repeatString = function(string, num) {      
//     if (num  === -1) { 
//         return 'ERROR'; 
//     }
//  return string.repeat(num); 
// };  

const repeatString = function(string, num) { 

    if (num === -1) { 
        return 'ERROR'; 
    }
let result = ''; 
for(let i = 0; i < num; i++){
//   result = result += string; 
result += string; 
}
return result;
}; 

console.log(repeatString('hey', 3 )); 

// Do not edit below this line
module.exports = repeatString;
