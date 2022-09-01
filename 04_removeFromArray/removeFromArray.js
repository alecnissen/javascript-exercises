const removeFromArray = function(arr, ...args) { 
   

        if (args == 3) {   
             arr.splice(2, 1); 
             return arr;  
        } else { 
            return arr.filter(a => !args.includes(a)) 
        }  
}; 


// Do not edit below this line
module.exports = removeFromArray;
