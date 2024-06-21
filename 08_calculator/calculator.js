const add = function(...nums) {
  let result = nums[0] + nums[1];
  
  return result;
};

const subtract = function(...nums) {
	let result = nums[0] - nums[1];

  return result;
};

const sum = function(nums) {
	let total = 0;

  for (let i=0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
};

const multiply = function(nums) {
  let total = nums[0];

  for (let i=1; i < nums.length; i++) {
    total *= nums[i];
  }

  return total;
};

const power = function(...nums) {
	let total = nums[0];
  
  for (let i=1; i < nums[1]; i++) {
    total *= nums[0];
  }

  return total;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

	let total = num;
  
  for (let i=num-1; i>0; i--) {
    total *= i;
  }

  return total;
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
