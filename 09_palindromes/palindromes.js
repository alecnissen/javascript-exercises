const palindromes = function (str) {
    let reg = /[\W_]/g; 

    let smallStr = str.toLowerCase().replace(reg, ''); 
  let reversed = smallStr.split('').reverse().join(''); 
  if (reversed === smallStr) { 
    return true; 
  }
  return false; 
};

// Do not edit below this line
module.exports = palindromes;
