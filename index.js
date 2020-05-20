import users from '/users.js'; //eslint-disable-line

/*
========== 1. Получить массив имен всех пользователей (поле name).========
*/
const getUserNames = function(arr) {
  return arr.map(user => user.name);
};

console.log(getUserNames(users));

// /*
// ========== 2. Получить массив объектов пользователей по цвету глаз (поле eyeColor).========
// */
const getUsersWithEyeColor = function(arr, color) {
  return arr.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

// /*
// ========== 3. Получить массив имен пользователей по полу (поле gender).========
// */
const getUsersWithGender = function(arr, gender) {
  const genderObj = arr.filter(user => user.gender === gender);
  return genderObj.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));

// /*
// ========== 4. Получить массив только неактивных пользователей (поле isActive).========
// */
const getInactiveUsers = function(arr) {
  return arr.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

// /*
// ========== 5. Получить пользоваля (не массив) по email (поле email, он уникальный).========
// */
const getUserWithEmail = function(arr, email) {
  return arr.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// /*
// ========== 6. Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).========
// */
const getUsersWithAge = function(arr, min, max) {
  return arr.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// /*
// ========== 7. Получить общую сумму баланса (поле balance) всех пользователей.========
// */
// const calculateTotalBalance = users => {
//   // твой код
// };

// console.log(calculateTotalBalance(users)); // 20916

// /*
// ========== 8. Массив имен всех пользователей у которых есть друг с указанным именем.========
// */
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// /*
// ========== 9. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends).========
// */
// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// /*
// ========== 10. Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.========
// */
// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
