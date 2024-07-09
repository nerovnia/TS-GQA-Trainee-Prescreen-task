'use strict'

import { processArrayTasks } from './src/tasks.js';

const testArrs = [
  [6,2,4,3,7,1],
  [4,8,5,6,1,6,5,8,4]
];

testArrs.map((arr) => {
  const result = processArrayTasks(arr);
  console.table(result);
})

