// =============================================
// =============================================

function strCase(str) {
  let newArr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== str[i].toUpperCase()
      ? newArr = newArr + str[i].toUpperCase()
      : newArr = newArr + str[i].toLowerCase();
  }
  return newArr;
}

console.log(strCase("iT`S jAVA sCRIPT =)"));

// =============================================
// =============================================

// Створити пустий об’єкт;
const obj = {};

// Створити пустий об’єкт без прототипу;
const obj = Object.create(null);

// Додати до об’єкта будь які нові поля всіма відомими способами;
let obj = new Object();

obj.name = "Andrew";

obj["job positoin"] = "Frontend dev"

obj.dataObj = {
city: "Lviv",
str: "Dudaeva"
}

// Створити пустий масив;
const arr = [];

// Створити пустий масив довжиною 100500 елементів;
const arr = new Array(100500);

//Створити масив з декількома елементами;
const arr = ['a','b','c'];

// Зробити заповнений масив пустим;
const array = ['a','b','c','d','e','f'];
array.splice(0);

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент
// з масиву за його індексом та поверне новий масив(оновлений- після видалення);
const array = [1, 2, 3, 4, 5];

function del(arr, num) {
    return arr.filter((el, ind) => ind !== num);
}

del(array, 1)

// Створити функцію, яка приймає один масив у якості аргументу та повертає булеве
// значення в залежності чи в неї передали пустий масив чи ні;
function check(arr) {
    return arr.length === 0 ? false : true;
}

// Створити функцію, яка приймає один об’єкт у якості аргументу та повертає
// булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
function check(obj) {
    return Object.keys(obj).length === 0 ? false : true;
}

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;
function add(arr, arr2) {
    return [...arr, ...arr2];
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
function check(arr) {
    return arr.map(el => (el*el)*el);
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається з непарних елементів вхідного масиву;
function check(arr) {
    return arr.filter(el => el % 2 !== 0);
}

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив,
// який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
function check(arr) {
    return arr.filter(el => Number.isInteger(el));
}

// Створити функцію, яка нічого не повертає;
function add(a, b) {
    a + b;
}

// =============================================
// =============================================
