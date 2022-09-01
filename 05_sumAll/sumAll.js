const sumAll = function(num1, num2) {    
let sum = 0;  

if ((num1 < 0 || num2 < 0) || typeof num1 !== 'number' || typeof num2 !== 'number')  { 
    return 'ERROR'; 
}  

 else if (num1 < num2) { 
    for (let i = num1; i <= num2; i++) { 
    sum += i; 
} 
} else  { 
    for (let j = num1; j >= num2; j--) { 
        sum += j;  
    }
}
return sum;     
}; 
 













// const sumAll = function(num1, num2) {    
// let sum = 0; 
// if (num1 < num2) { 
// for (let i = num1; i <= num2; i++) { 
//     sum += i; 
// } 
// } else { 
//     for (let j = num1; j >= num2; j--) { 
//         sum += j; 
//     }
// }
//     return sum; 
// }; 

// Do not edit below this line
module.exports = sumAll;
