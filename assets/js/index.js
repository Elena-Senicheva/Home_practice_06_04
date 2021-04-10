"use strict";

'use strict';


function capitalize(text) {
  return text
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
}

let text = "so beatiful world!";
console.log(capitalize(text));