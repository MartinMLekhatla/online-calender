const monthE1 = document.querySelector(".date h1");
const fullDateE1 = document.querySelector(".date p");
const daysE1 = document.querySelector(".days");
const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() - 1;
console.log(firstDay);

const monthIndex = new Date().getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthE1.innerText = months[monthIndex];
fullDateE1.innerText = new Date().toDateString();

let days = "";

for (let numberOfDays = firstDay; numberOfDays > 0; numberOfDays--) {
    days += `<div class="empty"></div>`;
}

for (let numberOfDays = 1; numberOfDays <= lastDay; numberOfDays++) {
    if (numberOfDays === new Date().getDate()) {
        days += `<div class="today">${numberOfDays}</div>`;
    } else {
        days += `<div>${numberOfDays}</div>`;
    }  
} 

daysE1.innerHTML = days;
