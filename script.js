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

let button = document.querySelector('#button')

button.addEventListener('click',check);

function check(){
if(birthDay.value===''||birthMonth.value===''||birthYear.value===''||birthDay.value>31||birthMonth.value>12||birthYear.value>2023){
    if(birthDay.value===''){
      showError(birthDay,'This field is required');
    } 
    else{
       anotherError(birthDay);
    }

    if(birthMonth.value==='' ){
       showError(birthMonth ,'This field is required');
    }
    else{
      anotherError(birthMonth);
    }
 
    if(birthYear.value===''){
      showError(birthYear,'This field is required');
    }
    else{
      anotherError(birthYear);
    }

    if(birthDay.value>31){
      isValid(birthDay ,'Must be a valid day');
    }
    if(birthMonth.value>12){
      isValid(birthMonth ,'Must be a valid month');
    }
 
    if(birthYear.value>2023){
       isValid(birthYear ,'Must be in the past');
    }
}
else{
     success(birthDay,birthMonth,birthYear);
    ageCalc();
}
}
