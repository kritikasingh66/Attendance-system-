// Attendance Data

const totalClasses = 3;
const attendedClasses = 0;

// Percentage Calculation

let percentage =
(attendedClasses / totalClasses) * 100;

// Progress Bar

document.querySelector(".progress-bar")
.style.width = percentage + "%";

// Console Output

console.log(
"Attendance Percentage = " + percentage + "%"
);