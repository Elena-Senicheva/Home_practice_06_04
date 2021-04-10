"use strict";

function User(firstName, lastName, email, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUsers(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(
      new User(
        `Name${i}`,
        `Name${i}`,
        ` user${i}@gmail.com`,
        getRandomIntInclusive(12, 50),
        Math.random() < 0.5,
        Math.random() < 0.5,
      )
    )
  }
  return usersArray;
}

console.log(getRandomUsers(8));

