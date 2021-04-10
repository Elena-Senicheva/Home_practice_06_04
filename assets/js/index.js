"use strict";

const NATIONALITIES = ["uk", "us", "ua", "bg", "fr", "gr", "ru"];

function User( firstName, lastName, email, age, nationality, isMale, isSubscribed = false
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.nationality = nationality;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}

// рандомное вічисление возраста от и до

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
Создать функцию, которая принимает amout - количество создаваемых объектов, создает указанное кол-во объектов пользователей с полями email, age, isMale.Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла. Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).Поле isMale заполняется рандомно значениями true или false.
*/

function getRandomUsers(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(
      new User(
        `Name${i}`,
        `Name${i}`,
        ` user${i}@gmail.com`,
        getRandomIntInclusive(12, 50),
        getRandomNationality(),
        Math.random() < 0.5,  // рандомная генерация м или ж
        Math.random() < 0.5  // рандомная генерация подписок
      )
    );
  }
  return usersArray;
}

function getRandomNationality() {
  return NATIONALITIES[getRandomIntInclusive(0, NATIONALITIES.length - 1)];
}

console.log(getRandomUsers(10));

User.prototype = new UserProto();

function UserProto() {
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}


// получить массив только подписанных,совершеннолетних женщин

const userList = getRandomUsers(80);

function getSubscribedAdultWomen(arr) {
  return arr.filter(function (user) {
    return user.isSubscribed && user.age >= 18 && !user.isMale;
  });
}

console.log(getSubscribedAdultWomen(userList));
