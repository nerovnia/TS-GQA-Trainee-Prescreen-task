'use strict'

import { processArrayTasks } from './src/tasks.js';

const result = processArrayTasks([6,2,4,3,7,1]);
//const result = processArrayTasks([4,8,5,6,1,6,5,8,4]);
console.log(result.reverseArray);
console.log(result.sumEven);
console.log(result.isPalindrome);
