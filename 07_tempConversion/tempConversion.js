const ftoc = function(temp) {
let number = (temp - 32) * 5/9;  
let rounded = Math.round(number * 10) / 10; 
return rounded; 
};

const ctof = function(temp) { 
let number = (temp * 9/5) + 32; 
let rounded = Math.round(number * 10) / 10; 
return rounded; 
}; 

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
