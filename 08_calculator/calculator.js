const add = function(num1, num2) { 

	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(nums) { 
  let sum = 0; 
	if (nums.length === 0) { 
    return sum; 
  } 
    for (let i = 0; i < nums.length; i++) { 
      let num = nums[i]; 

      sum += num; 
      if (nums.length === 1) { 
        return num; 
      } 
    }
    return sum; 
  } 


const multiply = function(num1, num2) { 
  return num1 * num2; 
} 


const power = function(num1, num2) {
	return num1 ** num2; 
};

const factorial = function(num) {
	if (num === 0) { 
    return 1; 
  } else { 
    return (num * power(num - 1)); 
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
