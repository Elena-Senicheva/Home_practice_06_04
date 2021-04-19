"use strict";

'use strict';
const t1 = function() {
  console.log(arguments);
}

const t2 = () => {
  console.log(arguments);
}

console.log(t1(1,2,3));
console.log(t2(1,2,3));