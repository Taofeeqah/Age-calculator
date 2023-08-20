const months = [31,28,31,30,31,30,31,31,30,31,30,31];

//my birth date
let birthDay = document.getElementById('Day');
let birthMonth = document.getElementById('Month');
let birthYear = document.getElementById('Year');
let Inputs = document.getElementById('input');

let todayDate = new Date(); //the today's date

//the today's year,month,day
let todayDay = todayDate.getDate();
let todayMonth = 1 + todayDate.getMonth();
let todayYear = todayDate.getFullYear();

//the result
let myBirthInYears = document.getElementById('yearDash');
let myBirthInMonths = document.getElementById('monthDash');
let myBirthInDays = document.getElementById('dayDash');

let bday;
let bmonth;
let byear;


button.addEventListener('click',check);
